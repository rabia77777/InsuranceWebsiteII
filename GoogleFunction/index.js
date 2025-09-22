require("dotenv").config();

const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  // Allow only POST requests
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, contact_number, email, comments } = req.body;

  try {
    // Configure transporter (example: Gmail SMTP)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // set via Secret Manager / env
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: `${process.env.BUSINESS_EMAIL}`, // Business email from env
      subject: `New Contact Form Submission`,
      text: `
Name: ${name}
Contact: ${contact_number}
Email: ${email}
Comments: ${comments}
      `,
    });

    res.status(200).send({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ message: "Failed to send email." });
  }
};
