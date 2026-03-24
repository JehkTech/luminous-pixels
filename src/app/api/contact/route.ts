import { NextRequest, NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/server/contact/schema";
import { sendContactNotification } from "@/server/contact/service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid form submission",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    await sendContactNotification(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

