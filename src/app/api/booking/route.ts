import { NextResponse } from "next/server";
import { getTreatment } from "@/lib/treatments";
import { BRANCHES } from "@/lib/site";

/**
 * Appointment request endpoint.
 *
 * This validates the request and returns a reference. It does NOT yet
 * deliver the request anywhere — wire it to an email provider (Resend,
 * Mailtrap, SMTP) or the clinic's booking system before launch. Until
 * then, requests are logged to the server console only.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      treatmentSlug,
      branchSlug,
      preferredDate,
      timePreference,
      name,
      email,
      phone,
      firstVisit,
      notes,
    } = body ?? {};

    const treatment = getTreatment(String(treatmentSlug));
    if (!treatment) {
      return NextResponse.json(
        { ok: false, error: "Unknown treatment." },
        { status: 400 }
      );
    }

    const branch = BRANCHES.find((b) => b.slug === String(branchSlug));
    if (!branch) {
      return NextResponse.json(
        { ok: false, error: "Please choose a studio." },
        { status: 400 }
      );
    }

    if (!preferredDate || Number.isNaN(new Date(preferredDate).getTime())) {
      return NextResponse.json(
        { ok: false, error: "Please choose a preferred date." },
        { status: 400 }
      );
    }

    if (
      !name ||
      String(name).trim().length < 2 ||
      !email ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email)) ||
      !phone ||
      String(phone).trim().length < 6
    ) {
      return NextResponse.json(
        { ok: false, error: "Please provide valid contact details." },
        { status: 400 }
      );
    }

    const reference =
      "ZAR-" +
      Math.abs(hash(`${treatmentSlug}${preferredDate}${email}`))
        .toString(36)
        .toUpperCase()
        .slice(0, 6);

    console.log("[booking] new request", {
      reference,
      treatment: treatment.name,
      guidePrice: treatment.price,
      branch: `${branch.city} · ${branch.name}`,
      preferredDate,
      timePreference,
      name,
      email,
      phone,
      firstVisit,
      notes,
    });

    return NextResponse.json({
      ok: true,
      reference,
      summary: {
        treatment: treatment.name,
        branch: `${branch.city} · ${branch.name}`,
        preferredDate,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request." },
      { status: 400 }
    );
  }
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}
