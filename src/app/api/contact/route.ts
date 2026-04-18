import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    if (typeof nome !== "string" || nome.length < 2) {
      return NextResponse.json(
        { error: "Nome deve ter pelo menos 2 caracteres." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    if (typeof mensagem !== "string" || mensagem.length < 10) {
      return NextResponse.json(
        { error: "Mensagem deve ter pelo menos 10 caracteres." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contato@israelmachado.com.br";

    await resend.emails.send({
      from: "Site Israel Machado <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `Contato via site: ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5a1f24; border-bottom: 1px solid #ddd; padding-bottom: 8px;">
            Nova mensagem via site
          </h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${mensagem}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
