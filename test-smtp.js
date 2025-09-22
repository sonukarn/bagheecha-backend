// test-smtp.js
import nodemailer from "nodemailer";

async function main() {
  let transporter = nodemailer.createTransport({
    host: "webmail.bagheecha.com",
    port: 465,
    secure: true, // TLS
    auth: {
      user: "contact@bagheecha.com",
      pass: "Welcome@#$12345",
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection successful!");
  } catch (err) {
    console.error("❌ SMTP connection failed:", err);
  }
}

main();
