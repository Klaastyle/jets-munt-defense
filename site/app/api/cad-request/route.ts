import { NextResponse } from "next/server";
import { formRateLimiter } from "@/lib/rate-limit";

// Use hardcoded values to prevent Vercel environment issues
const RESEND_API_KEY = "re_HLzW7KEe_NjUUDfP8ubdmA87prVM2HGvF";
const JETSMUNT_EMAIL = "albertponslajusticia@gmail.com"; 
const FROM_EMAIL = "JetsMunt CAD Center <onboarding@resend.dev>";

export async function POST(request: Request) {
  // 1. Rate Limiting
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const rateLimitResult = formRateLimiter.check(ip);
  if (!rateLimitResult.success) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  try {
    const data = await request.json();
    const { name, company, email, engineModel } = data;

    if (!name || !company || !email || !engineModel) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // 2. Email to JetsMunt Team (Lead Capture)
    const leadEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: JETSMUNT_EMAIL,
        subject: `[LEAD CAD] Descarga solicitada: ${engineModel} - ${company}`,
        html: `
          <h2>Nueva solicitud de descarga CAD 3D</h2>
          <p>Un ingeniero ha solicitado el modelo 3D del motor <strong>${engineModel}</strong>.</p>
          <h3>Datos del Lead:</h3>
          <ul>
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Empresa:</strong> ${company}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Motor:</strong> ${engineModel}</li>
          </ul>
          <p><em>Puedes responder directamente a este email para contactar con él.</em></p>
        `,
        reply_to: email,
      }),
    });

    if (!leadEmailResponse.ok) {
      console.error("Resend Lead Error:", await leadEmailResponse.text());
      throw new Error("Failed to send lead email");
    }

    // 3. Email to User (Download Link / Confirmation)
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: `[JetsMunt] Tu modelo 3D CAD del ${engineModel}`,
        html: `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <h2>Hola ${name},</h2>
            <p>Gracias por tu interés en integrar los motores de JetsMunt Defense en tu plataforma.</p>
            <p>Hemos recibido tu solicitud para el modelo 3D CAD del motor <strong>${engineModel}</strong>.</p>
            <p>Nuestro equipo de ingeniería está revisando tu solicitud y te adjuntará el archivo CAD exacto (STEP/IGES) en la mayor brevedad posible para asegurar que recibes la última revisión técnica.</p>
            <br/>
            <p>Si tienes requisitos específicos de integración o telemetría, puedes responder a este correo.</p>
            <br/>
            <p>Un saludo,</p>
            <p><strong>El equipo de ingeniería de JetsMunt</strong></p>
            <a href="https://jetsmuntdefense.com" style="color: #F26A21;">jetsmuntdefense.com</a>
          </div>
        `,
      }),
    });

    if (!userEmailResponse.ok) {
      console.error("Resend User Error:", await userEmailResponse.text());
      throw new Error("Failed to send user email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CAD Request Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
