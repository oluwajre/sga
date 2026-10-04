import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "reports",
      "sga-school-growth-report.pdf"
    );

    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="sga-school-growth-report.pdf"',
      },
    });
  } catch (error) {
    console.error("Lead magnet download error:", error);

    return NextResponse.json(
      {
        message: "Unable to download the report.",
      },
      { status: 500 }
    );
  }
}