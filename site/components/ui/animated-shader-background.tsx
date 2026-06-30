"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.0, 289.0))) * 45758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 r = mat2(0.72, -0.69, 0.69, 0.72);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = r * p * 2.06 + 12.7;
    a *= 0.48;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.07;
  float field = fbm(vec2(p.x * 1.85 + t, p.y * 1.18 - t * 0.6));
  float filament = fbm(vec2(p.x * 4.2 - field * 1.2, p.y * 2.2 + t * 1.7));
  float core = smoothstep(0.95, 0.08, abs(p.y + sin(p.x * 1.8 + t * 3.0) * 0.16));
  float flare = smoothstep(0.46, 1.0, field * 0.58 + filament * 0.48 + core * 0.32);

  vec3 base = vec3(0.018, 0.018, 0.016);
  vec3 graphite = vec3(0.10, 0.12, 0.12);
  vec3 electric = vec3(0.10, 0.34, 0.55);
  vec3 ignition = vec3(1.0, 0.34, 0.06);
  vec3 whiteHot = vec3(1.0, 0.78, 0.42);

  vec3 color = mix(base, graphite, filament * 0.54);
  color = mix(color, electric, smoothstep(0.42, 0.92, field) * 0.28);
  color = mix(color, ignition, flare * 0.62);
  color = mix(color, whiteHot, core * flare * 0.28);

  float vignette = smoothstep(1.36, 0.14, length(p * vec2(0.74, 1.1)));
  color *= vignette;
  color += vec3(noise(gl_FragCoord.xy + u_time) * 0.018);

  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function AnoAI() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
    });

    if (!gl) {
      return;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);

    if (!vs || !fs) {
      return;
    }

    const program = gl.createProgram();

    if (!program) {
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    const start = performance.now();
    let frame = 0;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (now: number) => {
      resize();
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return <canvas ref={canvasRef} className="ano-ai-shader" aria-hidden="true" />;
}
