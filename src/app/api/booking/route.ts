import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = [
      "occasion",
      "tripType",
      "date",
      "pickupTime",
      "pickup",
      "destination",
      "passengers",
      "firstName",
      "lastName",
      "email",
      "phone",
    ];

    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: "Please complete all required fields." },
          { status: 400 }
        );
      }
    }

    if (
      body.occasion === "Other" &&
      (!body.customOccasion || !String(body.customOccasion).trim())
    ) {
      return NextResponse.json(
        { error: "Please describe the occasion." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(String(body.email))) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { error: "Booking email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const reference = `ISS-${Date.now()
      .toString()
      .slice(-8)}`;

    const occasion =
      body.occasion === "Other"
        ? body.customOccasion
        : body.occasion;

    const { error } = await resend.emails.send({
      from: "International Supreme Sprinters <onboarding@resend.dev>",
      to: ["isssprinterservice@gmail.com"],
      replyTo: String(body.email),
      subject: `New ISS Ride Request — ${reference}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;color:#111;">
          <div style="background:#080808;padding:32px;color:white;">
            <p style="margin:0 0 8px;color:#d9ff43;font-size:12px;font-weight:700;letter-spacing:2px;">
              INTERNATIONAL SUPREME SPRINTERS
            </p>

            <h1 style="margin:0;font-size:30px;">
              New Ride Request
            </h1>

            <p style="margin:10px 0 0;color:#aaa;">
              Reference ${escapeHtml(reference)}
            </p>
          </div>

          <div style="padding:32px;border:1px solid #ddd;">
            <h2>Customer</h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(body.firstName)} ${escapeHtml(body.lastName)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(body.email)}
            </p>

            <p>
              <strong>Phone:</strong>
              ${escapeHtml(body.phone)}
            </p>

            <hr style="border:0;border-top:1px solid #ddd;margin:28px 0;" />

            <h2>Trip</h2>

            <p><strong>Occasion:</strong> ${escapeHtml(occasion)}</p>
            <p><strong>Trip Type:</strong> ${escapeHtml(body.tripType)}</p>
            <p><strong>Date:</strong> ${escapeHtml(body.date)}</p>
            <p><strong>Pickup Time:</strong> ${escapeHtml(body.pickupTime)}</p>
            <p><strong>Return Time:</strong> ${escapeHtml(body.returnTime || "N/A")}</p>
            <p><strong>Passengers:</strong> ${escapeHtml(body.passengers)}</p>

            <hr style="border:0;border-top:1px solid #ddd;margin:28px 0;" />

            <h2>Route</h2>

            <p><strong>Pickup:</strong> ${escapeHtml(body.pickup)}</p>
            <p><strong>Destination:</strong> ${escapeHtml(body.destination)}</p>
            <p><strong>Additional Stops:</strong> ${escapeHtml(body.stops || "None")}</p>

            <hr style="border:0;border-top:1px solid #ddd;margin:28px 0;" />

            <h2>Additional Notes</h2>

            <p style="white-space:pre-wrap;">
              ${escapeHtml(body.notes || "None")}
            </p>

            <div style="margin-top:32px;background:#f4f4f4;padding:18px;">
              Reply directly to this email to respond to
              ${escapeHtml(body.firstName)}.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend booking error:", error);

      return NextResponse.json(
        { error: "Unable to deliver your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      reference,
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}
