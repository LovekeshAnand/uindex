import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { libraries } from "@/data/libraries";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const urbanic = await readFile(join(process.cwd(), "src/app/fonts/Urbanic.otf"));
const bee = `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "src/app/og-bee.jpg"))).toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f4f4f7",
          fontFamily: "Urbanic",
          color: "#0d0f2b",
          padding: 64,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only supports <img> */}
        <img src={bee} width={780} height={520} style={{ position: "absolute", right: -40, top: 60 }} alt="" />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", fontSize: 190, lineHeight: 0.82 }}>
          <div style={{ display: "flex" }}>
            EVERY&nbsp;
            <span style={{ backgroundImage: "linear-gradient(100deg,#8b5cf6,#3b5bff,#38e1f0)", backgroundClip: "text", color: "transparent" }}>
              UI
            </span>
          </div>
          <div style={{ display: "flex" }}>INDEXED.</div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 34,
              background: "#0d0f2b",
              color: "#d8f55c",
              padding: "14px 26px",
              borderRadius: 18,
              alignSelf: "flex-start",
            }}
          >
            {libraries.length} UI LIBRARIES · ONE SEARCH
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Urbanic", data: urbanic, style: "normal", weight: 400 }] },
  );
}
