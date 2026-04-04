import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

let resendClient: Resend | null = null;

function getResendClient() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not defined in environment variables");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Contact Endpoint
  app.post("/api/contact", async (req, res) => {
    const { email, company, message } = req.body;

    if (!email || !company || !message) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    try {
      const resend = getResendClient();
      const { data, error } = await resend.emails.send({
        from: 'ODAS Contact <onboarding@resend.dev>', // Resend default for testing
        to: ['felipeortegawork@gmail.com'],
        subject: `Nuevo mensaje de contacto: ${company}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend Error Details:", JSON.stringify(error, null, 2));
        return res.status(500).json({ 
          error: "Error al enviar el correo", 
          details: error.message || error 
        });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
