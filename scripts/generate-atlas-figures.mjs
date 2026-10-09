import { mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/opportunity-atlas");
const tmpDir = resolve("/tmp/atlas-figures");
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const cream = "#f4efe6";
const navy = "#1c2744";
const navySoft = "#2a3858";
const steel = "#d5dee8";
const wall = "#e7eef5";
const windowFill = "#f7f8f6";
const floor = "#e6d5be";
const orange = "#c56a3c";
const box = "#d7b48a";
const boxSide = "#c4a278";
const blueprint = "#1d3f78";
const water = "#c5d6d1";
const sun = "#eadcc8";
const teal = "#2f7a6c";
const mould = "#7e93a8";
const mouldDark = "#5d738c";

const xml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const shadow = `
  <filter id="soft" x="-30%" y="-30%" width="160%" height="170%">
    <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#1c2744" flood-opacity="0.13"/>
  </filter>
  <filter id="tiny" x="-20%" y="-20%" width="140%" height="150%">
    <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#1c2744" flood-opacity="0.12"/>
  </filter>
`;

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>${shadow}</defs>
  <rect width="1600" height="900" fill="${cream}"/>
  ${body}
</svg>`;
}

function heroBlueprint() {
  const teeth = [];
  for (let i = 0; i < 8; i += 1) {
    const x = i * 200;
    teeth.push(`${x},210 ${x + 100},128 ${x + 200},210`);
  }
  const windows = [];
  for (let group = 0; group < 4; group += 1) {
    const gx = 150 + group * 250;
    for (let pane = 0; pane < 3; pane += 1) {
      windows.push(
        `<rect x="${gx + pane * 42}" y="280" width="26" height="168" rx="2" fill="${windowFill}"/>`
      );
    }
  }
  const rivets = [];
  for (let i = 0; i < 18; i += 1) {
    rivets.push(`<circle cx="${70 + i * 52}" cy="634" r="7" fill="#3c4c6b"/>`);
  }
  return svg(`
    <polygon points="${teeth.join(" ")}" fill="${steel}"/>
    <rect x="0" y="210" width="1600" height="360" fill="${wall}"/>
    ${windows.join("")}
    <rect x="0" y="700" width="1600" height="200" fill="${floor}"/>
    <rect x="40" y="618" width="980" height="32" rx="2" fill="${navy}"/>
    ${rivets.join("")}
    ${[150, 330, 520, 760].map((x) => `<rect x="${x}" y="650" width="12" height="78" fill="${navy}"/>`).join("")}
    <g filter="url(#tiny)">
      <rect x="168" y="548" width="108" height="70" fill="${box}"/>
      <rect x="168" y="532" width="108" height="18" fill="${boxSide}"/>
      <rect x="300" y="528" width="124" height="90" fill="${box}"/>
      <rect x="300" y="510" width="124" height="20" fill="${boxSide}"/>
    </g>
    <g stroke="${navy}" stroke-linecap="round" fill="${navy}">
      <rect x="690" y="572" width="70" height="46" rx="4"/>
      <circle cx="725" cy="560" r="14"/>
      <path d="M725 546 L640 470" stroke-width="16" fill="none"/>
      <circle cx="640" cy="470" r="12"/>
      <path d="M640 458 L600 392" stroke-width="14" fill="none"/>
      <circle cx="600" cy="384" r="10"/>
      <path d="M590 378 L574 360 M610 378 L626 360" stroke-width="6" fill="none"/>
    </g>
    <g transform="translate(860,250) rotate(7)" filter="url(#soft)">
      <clipPath id="bpClip"><rect width="680" height="470" rx="10"/></clipPath>
      <rect width="680" height="470" rx="10" fill="${blueprint}"/>
      <g clip-path="url(#bpClip)" stroke="#8eb4e0" stroke-width="1" opacity="0.55">
        ${Array.from({ length: 22 }, (_, i) => `<line x1="${i * 32}" y1="0" x2="${i * 32}" y2="470"/>`).join("")}
        ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 32}" x2="680" y2="${i * 32}"/>`).join("")}
      </g>
      <g fill="none" stroke="#f4f7fb" stroke-width="3">
        <circle cx="250" cy="210" r="108"/>
        <circle cx="250" cy="210" r="68"/>
        <circle cx="250" cy="210" r="24"/>
        <path d="M250 78 V342 M118 210 H382" stroke-width="2"/>
        <rect x="430" y="70" width="190" height="120"/>
        <path d="M430 70 L620 70 L525 150 Z" stroke-width="2"/>
        <rect x="450" y="250" width="170" height="120" stroke-dasharray="8 8"/>
        <path d="M70 410 H360" stroke-width="2"/>
        <path d="M70 398 V422 M360 398 V422" stroke-width="2"/>
      </g>
    </g>
    <g transform="translate(1120,390)" filter="url(#tiny)">
      <path d="M46 78 V58 a40 40 0 0 1 80 0 V78" fill="none" stroke="#9aa3ad" stroke-width="18" stroke-linecap="round"/>
      <rect x="18" y="78" width="136" height="112" rx="10" fill="${orange}"/>
      <circle cx="86" cy="128" r="14" fill="${navy}"/>
      <rect x="80" y="136" width="12" height="22" rx="4" fill="${navy}"/>
    </g>
  `);
}

function whoOwnsWhat() {
  const label = (x, y, text, fill, size = 22, weight = 500, anchor = "middle") =>
    `<text x="${x}" y="${y}" fill="${fill}" font-family="Inter, Liberation Sans, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${xml(text)}</text>`;

  return svg(`
    <g filter="url(#soft)">
      <rect x="390" y="48" width="820" height="250" rx="18" fill="${navy}"/>
    </g>
    ${label(800, 118, "Brand owner (parent, abroad)", "#ffffff", 36, 650)}
    ${label(800, 172, "Owns: know-how, designs, improvements", "#d5dce8", 24, 450)}
    ${label(800, 210, "Owns: trademarks and brand", "#d5dce8", 24, 450)}
    ${label(800, 248, "Owns: moulds and tooling", "#d5dce8", 24, 450)}

    <g filter="url(#soft)">
      <rect x="70" y="470" width="560" height="250" rx="16" fill="#3c5278"/>
      <rect x="970" y="470" width="560" height="250" rx="16" fill="#fffcf8" stroke="${navy}" stroke-width="3"/>
    </g>
    ${label(350, 545, "Indian subsidiary", "#ffffff", 34, 650)}
    ${label(350, 600, "Sells and manages locally", "#e4eaf3", 24, 450)}
    ${label(350, 640, "Pays royalties to parent", "#e4eaf3", 24, 450)}
    ${label(350, 680, "FC-GPR and FLA filings", "#e4eaf3", 24, 450)}

    ${label(1250, 545, "Contract manufacturer", navy, 34, 650)}
    ${label(1250, 600, "Licence only: named products,", "#3e4a62", 24, 450)}
    ${label(1250, 640, "sites and term", "#3e4a62", 24, 450)}
    ${label(1250, 680, "Holds tooling as bailee", "#3e4a62", 24, 450)}

    <g fill="none" stroke="${navy}" stroke-width="3.5">
      <path d="M560 298 C 430 340, 300 390, 250 460" marker-end="url(#arrowNavy)"/>
      <path d="M1040 298 C 1180 340, 1320 390, 1360 460" marker-end="url(#arrowNavy)"/>
      <path d="M970 590 H 650" marker-end="url(#arrowNavy)"/>
    </g>
    <path d="M470 470 C 520 390, 620 340, 700 300" fill="none" stroke="${orange}" stroke-width="3.5" marker-end="url(#arrowOrange)"/>
    <path d="M1180 470 C 1120 390, 1040 340, 960 300" fill="none" stroke="${teal}" stroke-width="3.5" marker-end="url(#arrowTeal)"/>

    ${label(300, 360, "Share investment", navy, 22, 500)}
    ${label(1288, 360, "Limited licence + tooling", navy, 22, 500)}
    ${label(560, 400, "Royalty at arm's length", orange, 22, 600)}
    ${label(1088, 390, "Improvements assigned back", teal, 22, 600)}
    ${label(810, 572, "Finished products", navy, 22, 500)}

    <text x="800" y="820" fill="#5c6a86" font-family="Liberation Serif, serif" font-size="26" font-style="italic" text-anchor="middle">Ownership stays at the top. Everyone else gets permission, on written conditions.</text>

    <defs>
      <marker id="arrowNavy" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="${navy}"/>
      </marker>
      <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="${orange}"/>
      </marker>
      <marker id="arrowTeal" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="${teal}"/>
      </marker>
    </defs>
  `);
}

function tooling() {
  const bolts = (ox, oy) =>
    [[28, 28], [232, 28], [28, 196], [232, 196]]
      .map(([x, y]) => `<circle cx="${ox + x}" cy="${oy + y}" r="9" fill="#243044"/>`)
      .join("");
  const bars = [];
  for (let i = 0; i < 18; i += 1) {
    const w = [3, 6, 2, 8, 3, 4, 10, 2, 5, 3, 7, 2, 4, 9, 3, 2, 6, 3][i];
    bars.push(`<rect x="${i * 8}" y="0" width="${w}" height="54" fill="#f7f1ea"/>`);
  }
  return svg(`
    <circle cx="800" cy="390" r="280" fill="#e4eaf1"/>
    <rect x="0" y="760" width="1600" height="140" fill="${floor}"/>
    <ellipse cx="800" cy="748" rx="420" ry="22" fill="#000" opacity="0.06"/>
    <g filter="url(#tiny)">
      <rect x="250" y="700" width="1100" height="22" rx="2" fill="#e7d0aa"/>
      <rect x="280" y="722" width="28" height="36" fill="#d9bc90"/>
      <rect x="470" y="722" width="28" height="36" fill="#d9bc90"/>
      <rect x="760" y="722" width="28" height="36" fill="#d9bc90"/>
      <rect x="1040" y="722" width="28" height="36" fill="#d9bc90"/>
      <rect x="1280" y="722" width="28" height="36" fill="#d9bc90"/>
      <rect x="250" y="754" width="1100" height="16" fill="#efd8b4"/>
    </g>
    <g filter="url(#soft)">
      <g transform="translate(330,390)">
        <rect width="280" height="250" rx="8" fill="${mouldDark}"/>
        <rect x="18" y="18" width="244" height="214" rx="6" fill="${mould}"/>
        <rect x="48" y="48" width="184" height="154" rx="8" fill="#4d6278"/>
        <circle cx="140" cy="125" r="28" fill="#6d8298"/>
        <circle cx="140" cy="125" r="12" fill="#dfe6ee"/>
        ${bolts(0, 0)}
      </g>
      <g transform="translate(860,400)">
        <rect width="300" height="230" rx="8" fill="#8ea2b6"/>
        <rect x="18" y="18" width="264" height="194" rx="6" fill="#a9bdd0"/>
        <rect x="48" y="46" width="204" height="138" rx="10" fill="#d5e0ea"/>
        ${bolts(10, 0)}
      </g>
    </g>
    <path d="M1128 430 C 1180 470, 1210 530, 1236 590" fill="none" stroke="${navy}" stroke-width="3"/>
    <g transform="translate(1188,590) rotate(8)" filter="url(#tiny)">
      <path d="M8 0 H92 L108 16 V150 H8 Z" fill="${orange}"/>
      <circle cx="28" cy="22" r="6" fill="${cream}"/>
      <g transform="translate(22,48)">${bars.join("")}</g>
    </g>
  `);
}

function exportRoute() {
  const containers = [
    [0, orange, 46],
    [50, "#2f6f86", 46],
    [100, "#d06a3c", 46],
    [150, teal, 46],
    [200, "#d7c4a2", 46],
    [250, "#7f8ea3", 46],
    [300, teal, 46],
    [0, "#3d6b58", 46, 50],
    [50, "#e0b15a", 46, 50],
    [100, "#8e5a3c", 46, 50],
    [150, "#c9d3c2", 46, 50],
    [200, "#35586d", 46, 50],
    [250, "#d7b48a", 46, 50],
  ];
  const waves = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const x = 620 + col * 100 + (row % 2) * 30;
      const y = 560 + row * 62;
      waves.push(`<path d="M${x} ${y} q 16 10 32 0" fill="none" stroke="#f7f4ee" stroke-width="3" opacity="0.8"/>`);
    }
  }
  return svg(`
    <circle cx="1280" cy="150" r="90" fill="${sun}"/>
    <path d="M0 430 H520 V900 H0 Z" fill="#e7d3b4"/>
    <path d="M520 520 C 560 560, 600 700, 620 900 H520 Z" fill="#e7d3b4"/>
    <rect x="560" y="470" width="1040" height="430" fill="${water}"/>
    ${waves.join("")}
    <path d="M1180 470 C 1280 500, 1400 520, 1600 500 V470 Z" fill="#e6d3b6"/>
    <path d="M1320 478 C 1420 500, 1520 490, 1600 470 V490 C 1500 510, 1400 516, 1300 492 Z" fill="#f0e2cc"/>
    <g transform="translate(150,250)">
      <rect width="230" height="160" fill="${navy}"/>
      <rect x="24" y="36" width="36" height="28" fill="#8ea0b8"/>
      <rect x="72" y="36" width="36" height="28" fill="#8ea0b8"/>
      <rect x="120" y="36" width="36" height="28" fill="#8ea0b8"/>
      <rect x="168" y="36" width="36" height="28" fill="#8ea0b8"/>
      <rect x="150" y="0" width="28" height="70" fill="${navy}"/>
      <circle cx="192" cy="8" r="8" fill="${orange}"/>
    </g>
    <path d="M342 258 C 620 80, 1080 40, 1468 300" fill="none" stroke="${navy}" stroke-width="4" stroke-dasharray="2 12" stroke-linecap="round"/>
    <circle cx="1468" cy="300" r="9" fill="${orange}"/>
    <g transform="translate(700,560)" filter="url(#tiny)">
      <path d="M20 150 H520 L490 210 H0 Z" fill="${navy}"/>
      <rect x="20" y="142" width="470" height="12" fill="${orange}"/>
      <rect x="400" y="40" width="78" height="110" fill="#f7f4ee"/>
      <rect x="424" y="16" width="18" height="28" fill="${navy}"/>
      <rect x="418" y="62" width="42" height="28" fill="#d5dde6"/>
      ${containers
        .map(
          ([x, fill, w, y = 0]) =>
            `<rect x="${40 + x}" y="${48 + y}" width="42" height="44" fill="${fill}"/>`
        )
        .join("")}
    </g>
    <ellipse cx="960" cy="790" rx="250" ry="16" fill="#1c2744" opacity="0.08"/>
  `);
}

function construction() {
  const cells = [];
  for (let col = 0; col < 4; col += 1) {
    for (let row = 0; row < 3; row += 1) {
      const filled = (col === 0 && row === 0) || (col === 1 && row === 1);
      cells.push(
        `<rect x="${40 + col * 130}" y="${40 + row * 110}" width="120" height="100" fill="${filled ? "#6d82a0" : "none"}" stroke="${navy}" stroke-width="8"/>`
      );
      if (!filled) {
        cells.push(
          `<path d="M${40 + col * 130} ${40 + row * 110} L${160 + col * 130} ${140 + row * 110}" fill="none" stroke="${navy}" stroke-width="3" opacity="0.7"/>`
        );
      }
    }
  }
  const windows = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      windows.push(`<rect x="${40 + col * 70}" y="${50 + row * 70}" width="46" height="46" fill="${windowFill}"/>`);
    }
  }
  return svg(`
    <circle cx="1180" cy="180" r="110" fill="${sun}"/>
    <rect x="0" y="760" width="1600" height="140" fill="${floor}"/>
    <g transform="translate(80,300)">
      <polygon points="0,40 40,0 80,40 120,0 160,40 200,0 240,40 280,0 320,40" fill="#d5e0ea"/>
      <rect y="40" width="320" height="420" fill="#d5e0ea"/>
      ${windows.join("")}
    </g>
    <g transform="translate(460,250)">
      <rect x="20" y="40" width="500" height="470" fill="none"/>
      ${[0, 1, 2, 3, 4].map((i) => `<path d="M${40 + i * 130} 20 V510" stroke="${navy}" stroke-width="8"/>`).join("")}
      ${[0, 1, 2, 3].map((i) => `<path d="M20 ${40 + i * 150} H540" stroke="${navy}" stroke-width="8"/>`).join("")}
      ${cells.join("")}
    </g>
    <g stroke="${orange}" fill="${orange}" stroke-linejoin="round">
      <path d="M1280 90 H1500" stroke-width="16"/>
      <path d="M1460 70 L1520 150" stroke-width="16"/>
      <path d="M1500 90 V760" stroke-width="18"/>
      <path d="M1470 180 H1550 M1460 260 H1560 M1450 340 H1570 M1440 420 H1580" stroke-width="8"/>
      <rect x="1188" y="70" width="36" height="28"/>
      <rect x="1548" y="120" width="48" height="36"/>
    </g>
    <path d="M980 250 V400" stroke="${navy}" stroke-width="4"/>
    <path d="M900 400 H1060 L980 360 Z" fill="none" stroke="${navy}" stroke-width="4"/>
    <rect x="90" y="700" width="70" height="50" fill="${box}"/>
    <g transform="translate(1360,680)">
      ${[0, 1, 2, 3].map((i) => `<rect x="0" y="${i * 14}" width="120" height="10" fill="#5d738c"/>`).join("")}
    </g>
  `);
}

function claimCycle() {
  const steps = [
    ["1", "Approval", ["Applicant and unit", "approved"], false],
    ["2", "Invest", ["Yearly thresholds", "(no land/buildings)"], false],
    ["3", "Produce &amp; sell", ["Net sales; own", "manufacturing"], false],
    ["4", "Claim", ["Online, typically", "quarterly, with evidence"], false],
    ["5", "Review", ["Project management", "agency examines"], false],
    ["6", "Payment", ["Related-party sales:", "80% first, 20% after", "tax compliance"], true],
  ];
  const nodes = steps
    .map((step, index) => {
      const x = 130 + index * 250;
      const [num, title, lines, accent] = step;
      const fill = accent ? orange : navy;
      const text = lines
        .map(
          (line, lineIndex) =>
            `<text x="${x}" y="${292 + lineIndex * 28}" text-anchor="middle" fill="#4c5870" font-family="Inter, Liberation Sans, sans-serif" font-size="20">${line}</text>`
        )
        .join("");
      return `
        <circle cx="${x}" cy="168" r="32" fill="${fill}"/>
        <text x="${x}" y="178" text-anchor="middle" fill="#fff" font-family="Inter, Liberation Sans, sans-serif" font-size="26" font-weight="650">${num}</text>
        <text x="${x}" y="246" text-anchor="middle" fill="${navy}" font-family="Inter, Liberation Sans, sans-serif" font-size="28" font-weight="650">${title}</text>
        ${text}
      `;
    })
    .join("");

  return svg(`
    <text x="1180" y="62" fill="#5d6d88" font-family="Liberation Serif, serif" font-size="24" font-style="italic">repeats each claim period</text>
    <path d="M1380 80 C 1240 10, 980 10, 900 78" fill="none" stroke="#3c5278" stroke-width="3" marker-end="url(#arr)"/>
    <path d="M180 168 H1380" stroke="#d5dde8" stroke-width="8"/>
    ${nodes}
    <g filter="url(#tiny)">
      <rect x="80" y="520" width="680" height="230" rx="8" fill="#fffcf8" stroke="${navy}" stroke-width="3"/>
      <rect x="840" y="560" width="680" height="210" rx="8" fill="#fff8f4" stroke="${orange}" stroke-width="3"/>
    </g>
    <text x="420" y="600" text-anchor="middle" fill="${navy}" font-family="Inter, Liberation Sans, sans-serif" font-size="28" font-weight="700">Any time: change of control or site</text>
    <text x="420" y="652" text-anchor="middle" fill="#4c5870" font-family="Inter, Liberation Sans, sans-serif" font-size="22">Check the approval letter and clear it with</text>
    <text x="420" y="686" text-anchor="middle" fill="#4c5870" font-family="Inter, Liberation Sans, sans-serif" font-size="22">the scheme authority before acting</text>
    <text x="1180" y="640" text-anchor="middle" fill="${orange}" font-family="Inter, Liberation Sans, sans-serif" font-size="28" font-weight="700">Years later: tax assessment</text>
    <text x="1180" y="692" text-anchor="middle" fill="#4c5870" font-family="Inter, Liberation Sans, sans-serif" font-size="22">Related-party prices adjusted? Refund the excess,</text>
    <text x="1180" y="726" text-anchor="middle" fill="#4c5870" font-family="Inter, Liberation Sans, sans-serif" font-size="22">with interest (clawback)</text>
    <path d="M1040 560 C 980 470, 900 420, 860 250" fill="none" stroke="${orange}" stroke-width="3" stroke-dasharray="7 8" marker-end="url(#arrOrange)"/>
    <defs>
      <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="#3c5278"/>
      </marker>
      <marker id="arrOrange" markerWidth="10" markerHeight="10" refX="2" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="${orange}"/>
      </marker>
    </defs>
  `);
}

function power() {
  function tower(x, h, top) {
    const y = 640 - h;
    return `
      <g stroke="${navy}" fill="none" stroke-width="3">
        <path d="M${x} ${y + 20} L${x - 70} 640 L${x + 70} 640 Z" stroke-width="4"/>
        <path d="M${x - 48} ${y + 150} H${x + 48}"/>
        <path d="M${x - 36} ${y + 230} H${x + 36}"/>
        <path d="M${x - 24} ${y + 80} H${x + 24}"/>
        <path d="M${x - 55} 640 L${x} ${y + 40} L${x + 55} 640"/>
        <path d="M${x - 40} 640 L${x + 10} ${y + 160}"/>
        <path d="M${x + 40} 640 L${x - 10} ${y + 160}"/>
        <path d="M${x} ${y} V${y + 36}"/>
        <path d="M${x - 90} ${y + 36} H${x + 90}"/>
        <path d="M${x - 70} ${y + 70} H${x + 70}"/>
      </g>
    `;
  }
  const wires = `
    <path d="M210 250 C 360 310, 480 310, 620 230" fill="none" stroke="#8ea0b8" stroke-width="3"/>
    <path d="M210 280 C 360 340, 480 340, 620 260" fill="none" stroke="#8ea0b8" stroke-width="3"/>
    <path d="M620 230 C 760 300, 860 300, 980 250" fill="none" stroke="#8ea0b8" stroke-width="3"/>
    <path d="M620 260 C 760 330, 860 330, 980 280" fill="none" stroke="#8ea0b8" stroke-width="3"/>
    <path d="M980 250 C 1100 300, 1160 320, 1240 340" fill="none" stroke="#8ea0b8" stroke-width="3"/>
    <path d="M980 280 C 1100 330, 1160 350, 1240 370" fill="none" stroke="#8ea0b8" stroke-width="3"/>
  `;
  return svg(`
    <circle cx="1260" cy="150" r="78" fill="${sun}"/>
    <rect x="0" y="640" width="1600" height="260" fill="${floor}"/>
    ${tower(220, 460)}
    ${tower(640, 390)}
    ${tower(990, 300)}
    ${wires}
    <g transform="translate(1120,470)">
      <path d="M20 170 H360" stroke="${navy}" stroke-width="8"/>
      <path d="M40 170 V70 H340 V170" fill="none" stroke="${navy}" stroke-width="8"/>
      <rect x="70" y="110" width="90" height="60" fill="${navySoft}"/>
      <rect x="190" y="100" width="100" height="70" fill="${navySoft}"/>
      ${[80, 100, 120, 140].map((x) => `<rect x="${x}" y="78" width="8" height="32" fill="${orange}"/>`).join("")}
      ${[205, 230, 255, 275].map((x) => `<rect x="${x}" y="68" width="8" height="32" fill="${orange}"/>`).join("")}
      <path d="M20 150 H70 M360 150 H400" stroke="${navy}" stroke-width="4"/>
    </g>
    <g transform="translate(1280,430)">
      <polygon points="0,80 30,40 60,80 90,40 120,80 150,40 180,80" fill="#d5e0ea"/>
      <rect y="80" width="180" height="130" fill="#d5e0ea"/>
      <rect x="150" y="20" width="16" height="70" fill="#c5d0dc"/>
    </g>
  `);
}

function continents() {
  function land(cx, cy, rx, ry, phase) {
    const dots = [];
    for (let y = cy - ry; y <= cy + ry; y += 16) {
      for (let x = cx - rx; x <= cx + rx; x += 16) {
        const nx = (x - cx) / rx;
        const ny = (y - cy) / ry;
        const coast =
          0.18 * Math.sin(nx * 7 + phase) +
          0.12 * Math.cos(ny * 6 + phase) +
          0.08 * Math.sin((nx + ny) * 9);
        if (nx * nx + ny * ny < 0.92 + coast) {
          dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.2" fill="#9aafc4"/>`);
        }
      }
    }
    return dots.join("");
  }

  function arc(d, color, markers) {
    const marks = markers
      .map(([x, y, shape]) =>
        shape === "sq"
          ? `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" rx="2" fill="${color}"/>`
          : `<circle cx="${x}" cy="${y}" r="7" fill="${navy}"/>`
      )
      .join("");
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="3.5" stroke-dasharray="2 10" stroke-linecap="round"/>${marks}`;
  }

  return svg(`
    ${land(380, 470, 340, 280, 0.4)}
    ${land(1220, 450, 360, 300, 1.7)}
    ${arc("M260 620 C 480 250, 1120 180, 1400 520", teal, [
      [430, 390, "sq"],
      [1120, 250, "sq"],
      [1320, 400, "dot"],
    ])}
    ${arc("M300 560 C 520 300, 1080 250, 1360 470", navy, [
      [500, 400, "dot"],
      [1080, 300, "sq"],
      [1280, 400, "dot"],
    ])}
    ${arc("M340 520 C 560 340, 1040 300, 1240 640", orange, [
      [620, 360, "sq"],
      [1040, 340, "sq"],
      [1180, 500, "dot"],
    ])}
    <g transform="translate(736,70)" filter="url(#tiny)">
      <path d="M64 0 L120 24 V78 C120 112 92 140 64 152 C36 140 8 112 8 78 V24 Z" fill="${navy}"/>
      <path d="M42 78 L58 94 L90 58" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  `);
}

const figures = {
  "a1-hero-locked-blueprint": heroBlueprint(),
  "a1-diagram-who-owns-what": whoOwnsWhat(),
  "a1-tooling-asset-tag": tooling(),
  "a1-export-route": exportRoute(),
  "a2-hero-factory-construction": construction(),
  "a2-diagram-claim-cycle": claimCycle(),
  "a2-power-substation": power(),
  "a2-data-between-continents": continents(),
};

for (const [name, markup] of Object.entries(figures)) {
  const svgPath = resolve(tmpDir, `${name}.svg`);
  const pngPath = resolve(outDir, `${name}.png`);
  writeFileSync(svgPath, markup);
  const result = spawnSync(
    "rsvg-convert",
    ["-w", "1600", "-h", "900", "-o", pngPath, svgPath],
    { encoding: "utf8" }
  );
  if (result.status !== 0) {
    console.error(name, result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }
  console.log("wrote", pngPath);
}
