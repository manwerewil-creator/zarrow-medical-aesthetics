import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Validates and logs; connect an email provider
 * before launch so messages actually reach the studio inbox.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, message } = body ?? {};

    if (
      !name ||
      String(name).trim().length < 2 ||
      !email ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email)) ||
      !message ||
      String(message).trim().length < 5
    ) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    console.log("[contact] new message", {
      name,
      email,
      phone,
      interest,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request." },
      { status: 400 }
    );
  }
}
