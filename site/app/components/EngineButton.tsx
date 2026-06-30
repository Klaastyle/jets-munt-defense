"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function EngineButton({ name, href, delay = 0, style }: { name: string, href: string, delay?: number, style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ display: 'inline-block', ...style }}
    >
      <Link 
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '0.8rem 2.8rem',
          fontSize: '1.1rem',
          fontWeight: hovered ? '900' : '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          borderRadius: '50px',
          color: hovered ? '#140b05' : '#ffffff',
          textShadow: hovered 
            ? '0 0 10px rgba(255, 255, 255, 0.6)' 
            : '0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.5)',
          WebkitTextStroke: hovered ? '0.4px #140b05' : '0px transparent',
          backgroundColor: hovered ? '#f26a21' : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: hovered 
            ? '0 0 20px rgba(242, 106, 33, 0.7), 0 0 40px rgba(242, 106, 33, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 20px rgba(242, 106, 33, 0.6), inset 0 0 10px rgba(242, 106, 33, 0.2)',
          border: hovered ? '1px solid #ffffff' : '1px solid rgba(242, 106, 33, 0.5)',
          transform: hovered ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>{name}</span>
        {/* Shine effect overlay that sweeps across on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: hovered ? '120%' : '-100%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-25deg)',
          transition: hovered ? 'left 0.6s ease-out' : 'none',
          zIndex: 1,
        }} />
      </Link>
    </motion.div>
  );
}
