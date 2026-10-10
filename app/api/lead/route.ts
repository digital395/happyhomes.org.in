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
