import nodemailer from "nodemailer";

type LeadMailPayload = {
  name: string;
  phone: string;
  email: string;
};

export async function sendGoogleLeadMail(data: LeadMailPayload) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Happy Homes Leads`,
      to: ["info@happyhomes.org.in"],
      subject: "New Google Lead - Happy Homes",
      html: `
    <h2>New Lead Received</h2>

    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td><strong>Name</strong></td>
        <td>${data.name}</td>
      </tr>
      <tr>
        <td><strong>Phone</strong></td>
        <td>${data.phone}</td>
      </tr>
      <tr>
        <td><strong>Email</strong></td>
        <td>${data.email || "-"}</td>
      </tr>
    </table>
  `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("📧 Google Lead Email Sent:", info.response);

    return {
      success: true,
      response: info.response,
    };
  } catch (error: any) {
    console.error("❌ Email Send Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
