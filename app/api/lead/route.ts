import { NextRequest, NextResponse } from "next/server";
import { sendGoogleLeadMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email } = body;

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and Phone are required.",
        },
        { status: 400 },
      );
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid name.",
        },
        { status: 400 },
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number must contain exactly 10 digits.",
        },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 },
      );
    }

    const mailResponse = await sendGoogleLeadMail({
      name,
      phone,
      email: email || "",
    });

    console.log("Mail Response:", mailResponse);

    if (!mailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send lead.",
          error: mailResponse.error,
        },
        { status: 500 },
      );
    }
   const webhookUrl = process.env.PIX_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("PIX_WEBHOOK_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Pix CRM webhook URL is not configured.",
        },
        { status: 500 },
      );
    }

   const pixPayload = {
      full_name: name,
      phone_number: phone,
      email: email || "",
      notes: "Lead received from BC_Website",
      project_code: "Happy Homes",
    };

    console.log("Pix CRM Payload:", pixPayload);

    // Send POST request with JSON
    const pixResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(pixPayload),
      cache: "no-store",
    });

    const pixResponseText = await pixResponse.text();

    console.log("Pix CRM Status:", pixResponse.status);
    console.log("Pix CRM Response:", pixResponseText);

    if (!pixResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead email sent, but Pix CRM submission failed.",
          crmStatus: pixResponse.status,
          crmResponse: pixResponseText,
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
