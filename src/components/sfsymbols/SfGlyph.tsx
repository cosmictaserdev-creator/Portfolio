"use client";

/**
 * Deterministic glyph mark for an SF Symbol. Every symbol gets a distinct,
 * stable, on-brand tessellation derived from its name + category — so the
 * 7,007-tile catalog scans as alive without shipping Apple's path data.
 *
 * Shape family is chosen from the category; the exact tile picks a unique
 * seed from a hash of the Apple dot-name. Same symbol => same mark, always.
 */

const SHAPE_FAMILIES: Record<string, string[]> = {
  Arrows: ["Chevron", "Arrow", "ReturnArrow", "Pointing"],
  Automotive: ["Steering", "Gauge", "Road", "Signal"],
  "Camera & Photos": ["Aperture", "Shutter", "Lens", "Viewfinder"],
  Commerce: ["Tag", "Bag", "Cart", "Coins"],
  Communication: ["Bubble", "Phone", "Waveform", "Signal"],
  Connectivity: ["Nodes", "Link", "Antenna", "Broadcast"],
  Devices: ["Screen", "Hardware", "Battery", "Speaker"],
  Draw: ["Brush", "Ink", "Pen", "Palette"],
  Editing: ["Scissors", "Crop", "Slider", "Transform"],
  Fitness: ["Activity", "Heart", "Pulse", "Flame"],
  Gaming: ["Controller", "Dice", "Joystick", "Spark"],
  Health: ["Cross", "Pill", "HeartPulse", "Steth"],
  Home: ["House", "Key", "Lock", "Light"],
  Human: ["Person", "Hand", "Eye", "Head"],
  Indices: ["Numeral", "Ring", "SquareTile", "Circular"],
  Keyboard: ["GlyphKey", "Command", "KeyCap", "Shift"],
  Maps: ["Pin", "Compass", "Route", "Globe"],
  Math: ["Sum", "Integral", "Root", "Equals"],
  Media: ["Play", "Pause", "Forward", "Repeat"],
  Multicolor: ["Prism", "Palette", "Swatch", "Gradient"],
  Nature: ["Leaf", "Cloud", "Flower", "Wave"],
  "Objects & Tools": ["Tool", "Gear", "Wrench", "Box"],
  "Privacy & Security": ["Shield", "Lock", "CheckSeal", "Keyhole"],
  Shapes: ["Diamond", "Star", "Hexagon", "Circle"],
  "Text Formatting": ["Bold", "Italic", "Font", "Align"],
  Time: ["Clock", "Hourglass", "Alarm", "Timer"],
  Transportation: ["Car", "Plane", "Ship", "Train"],
  Variable: ["Slider", "Gauge2", "Knob", "Dial"],
  Weather: ["Sun", "Rain", "Snow", "Bolt"],
  Accessibility: ["Figure", "Hearing", "Vision", "Access"],
  Gaming2: ["Controller", "Dpad", "Sprite", "Crown"],
};

const DEFAULT_SHAPES = ["Square", "Circle", "Hexagon", "Star", "Diamond"];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickShape(categories: string[], seed: number): string {
  const fam = categories.map((c) => SHAPE_FAMILIES[c]).find(Boolean);
  const pool = fam ?? DEFAULT_SHAPES;
  return {
    Square: "SQUARE",
    Circle: "CIRCLE",
    Hexagon: "HEXAGON",
    Star: "STAR",
    Diamond: "DIAMOND",
    Arrow: "ARROW",
    Chevron: "CHEVRON",
    Shield: "SHIELD",
    Bolt: "BOLT",
    Leaf: "LEAF",
    Compass: "COMPASS",
    Gear: "GEAR",
    Tag: "TAG",
    Heart: "HEART",
    Play: "PLAY",
    Light: "LIGHT",
    Cloud: "CLOUD",
    Globe: "GLOBE",
    Phone: "PHONE",
    Wrench: "WRENCH",
    Gauge: "GAUGE",
    Activity: "ACTIVITY",
    Lock: "LOCK",
    Person: "PERSON",
    Sun: "SUN",
    Pin: "PIN",
    Clock: "CLOCK",
    House: "HOUSE",
    Key: "KEY",
    Brush: "BRUSH",
    Screen: "SCREEN",
    Palette: "PALETTE",
    Bubble: "BUBBLE",
    Box: "BOX",
    Tool: "WRENCH",
    Aperture: "APERTURE",
    Battery: "BATTERY",
    Car: "CAR",
    Plane: "PLANE",
    Controller: "CONTROLLER",
    Prism: "PRISM",
    Slider: "SLIDER",
    Star2: "STAR",
    Leaf2: "LEAF",
    Flame: "FLAME",
  }[pool[seed % pool.length]] ?? "SQUARE";
}

function renderShape(kind: string, seed: number, accent: string, sub: string) {
  const s = 24; // viewBox square
  const c = s / 2;
  const r = 8.5;

  const strokeCommon = {
    fill: "none",
    stroke: accent,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const subStroke = {
    fill: "none",
    stroke: sub,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const filled = {
    fill: accent,
    stroke: "none",
  };

  switch (kind) {
    case "CIRCLE":
      return (
        <>
          <circle cx={c} cy={c} r={r} {...strokeCommon} />
          <circle cx={c} cy={c} r={2.2} {...filled} opacity={0.85} />
        </>
      );
    case "HEXAGON":
      return (
        <>
          <path
            d="M12 3.2 20 8v8l-8 4.8L4 16V8z"
            {...strokeCommon}
          />
          <path d="M12 8.4 15.6 10.8v4.4L12 17.6 8.4 15.2v-4.4z" {...subStroke} />
        </>
      );
    case "STAR":
      return (
        <>
          <path
            d="m12 4 2.2 4.5 4.9.7-3.6 3.5.9 4.9-4.4-2.3-4.4 2.3.9-4.9L4.9 9.2l4.9-.7z"
            {...strokeCommon}
          />
        </>
      );
    case "DIAMOND":
      return (
        <>
          <path d="M12 4 20 12 12 20 4 12z" {...strokeCommon} />
          <circle cx={12} cy={12} r={2} {...filled} opacity={0.85} />
        </>
      );
    case "ARROW":
      return (
        <>
          <path d="M6 18 18 6" {...strokeCommon} />
          <path d="M8.5 6H18v9.5" {...strokeCommon} />
        </>
      );
    case "CHEVRON":
      return (
        <>
          <path d="m9 7 5 5-5 5" {...strokeCommon} />
          <path d="m15 7 5 5-5 5" {...subStroke} opacity={0.6} />
        </>
      );
    case "SHIELD":
      return (
        <>
          <path d="M12 3.5 8 5v6c0 4.2 1.8 7 4 8.4 2.2-1.4 4-4.2 4-8.4V5z" {...strokeCommon} />
          <path d="m9.4 11.4 1.9 2 3.3-3.6" {...subStroke} />
        </>
      );
    case "BOLT":
      return (
        <>
          <path d="M13.5 3 6 13.5h5L10.5 21 18 10.5h-5z" {...strokeCommon} strokeLinejoin="round" />
        </>
      );
    case "LEAF":
      return (
        <>
          <path
            d="M6 18C6 9 11 5 19 5c0 8-2.5 13-8 13-1.8 0-3.4-.6-4.6-1.6M6 18c0-3 .8-5.2 2.4-7"
            {...strokeCommon}
          />
        </>
      );
    case "COMPASS":
      return (
        <>
          <circle cx={12} cy={12} r={8.2} {...strokeCommon} />
          <path d="m14.6 9.4-1.8 3.4-3.4 1.8 1.8-3.4z" {...filled} opacity={0.9} />
        </>
      );
    case "GEAR":
      return (
        <>
          <circle cx={12} cy={12} r={4.2} {...strokeCommon} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            const x1 = c + Math.cos(a) * (r + 0.5);
            const y1 = c + Math.sin(a) * (r + 0.5);
            const x2 = c + Math.cos(a) * (r + 3.4);
            const y2 = c + Math.sin(a) * (r + 3.4);
            return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} {...strokeCommon} />;
          })}
        </>
      );
    case "TAG":
      return (
        <>
          <path d="M4 4h7l9 9-7 7-9-9z" {...strokeCommon} />
          <circle cx={8.5} cy={8.5} r={1.4} {...filled} opacity={0.9} />
        </>
      );
    case "HEART":
      return (
        <>
          <path
            d="M12 20s-7-4.3-7-9A3.8 3.8 0 0 1 12 7.6 3.8 3.8 0 0 1 19 11c0 4.7-7 9-7 9z"
            {...strokeCommon}
          />
        </>
      );
    case "PLAY":
      return (
        <>
          <path d="M9 6.2 17 12l-8 5.8z" {...filled} opacity={0.9} />
        </>
      );
    case "LIGHT":
      return (
        <>
          <path d="M12 5v1.5M6.6 7.8l1.1 1M17.4 7.8l-1.1 1M5.6 13h1.6M16.8 13h1.6" {...strokeCommon} />
          <path d="M9.5 14.5a3.4 3.4 0 1 1 5 0l-.6 2h-3.8z" {...strokeCommon} />
        </>
      );
    case "CLOUD":
      return (
        <>
          <path
            d="M7.5 18.5a4 4 0 0 1-.6-7.9A5 5 0 0 1 17 9a4.5 4.5 0 0 1-.5 9z"
            {...strokeCommon}
          />
        </>
      );
    case "GLOBE":
      return (
        <>
          <circle cx={12} cy={12} r={8.2} {...strokeCommon} />
          <path d="M3.8 12h16.4M12 3.8c2.5 2.2 3.7 5 3.7 8.2S14.5 18 12 20.2C9.5 18 8.3 15.2 8.3 12s1.2-6 3.7-8.2z" {...strokeCommon} />
        </>
      );
    case "PHONE":
      return (
        <>
          <rect x={7} y={3.5} width={10} height={17} rx={2.4} {...strokeCommon} />
          <path d="M10.5 17.5h3" {...subStroke} />
        </>
      );
    case "WRENCH":
      return (
        <>
          <path
            d="M14.5 8.5a4.3 4.3 0 0 1-5.4 5.6L5 18.2a1.7 1.7 0 0 1-2.4-2.4l4.1-4.1a4.3 4.3 0 0 1 5.6-5.4L9.2 9.2a1.2 1.2 0 1 0 1.6 1.7z"
            {...strokeCommon}
          />
        </>
      );
    case "GAUGE":
      return (
        <>
          <path d="M4 18a8 8 0 1 1 16 0z" {...strokeCommon} />
          <path d="m12 13 4-4" {...subStroke} />
          <circle cx={12} cy={13} r={1.6} {...filled} opacity={0.9} />
        </>
      );
    case "ACTIVITY":
      return (
        <>
          <path d="M3 12h4l2.5-6 5 12 2.5-6H21" {...strokeCommon} />
        </>
      );
    case "LOCK":
      return (
        <>
          <rect x={6} y={10.5} width={12} height={9} rx={2} {...strokeCommon} />
          <path d="M8.5 10.5v-2a3.5 3.5 0 0 1 7 0v2" {...strokeCommon} />
        </>
      );
    case "PERSON":
      return (
        <>
          <circle cx={12} cy={8} r={3.6} {...strokeCommon} />
          <path d="M5.5 20.5c.8-3.6 3.4-5.4 6.5-5.4s5.7 1.8 6.5 5.4" {...strokeCommon} />
        </>
      );
    case "SUN":
      return (
        <>
          <circle cx={12} cy={12} r={4} {...strokeCommon} />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19" {...strokeCommon} />
        </>
      );
    case "PIN":
      return (
        <>
          <path d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10z" {...strokeCommon} />
          <circle cx={12} cy={11} r={2.3} {...filled} opacity={0.9} />
        </>
      );
    case "CLOCK":
      return (
        <>
          <circle cx={12} cy={12} r={8} {...strokeCommon} />
          <path d="M12 7.5V12l3 2" {...subStroke} />
        </>
      );
    case "HOUSE":
      return (
        <>
          <path d="m4 11 8-7 8 7" {...strokeCommon} />
          <path d="M6 9.5V20h12V9.5" {...strokeCommon} />
        </>
      );
    case "KEY":
      return (
        <>
          <circle cx={8} cy={15.5} r={3.5} {...strokeCommon} />
          <path d="M10.6 12.9 20 3.5M16.5 7 19 9.5M13.5 10l2.5 2.5" {...strokeCommon} />
        </>
      );
    case "BRUSH":
      return (
        <>
          <path d="M19 4c-6 1-9 4-10 7l-3 3a2.5 2.5 0 1 0 3.5 3.5l3-3c3-1 6-4 6.5-10.5z" {...strokeCommon} />
        </>
      );
    case "SCREEN":
      return (
        <>
          <rect x={4} y={4} width={16} height={12} rx={2} {...strokeCommon} />
          <path d="M9 20h6" {...subStroke} />
        </>
      );
    case "PALETTE":
      return (
        <>
          <path d="M12 4a8 8 0 1 0 3.5 15.2l1-1.6a1.7 1.7 0 0 1-.8-2.2c.3-.7 1-.6 1.7-.9 1.4-.7 1.6-1.9 2.1-3.2.6-1.7-.1-4.2-2.5-5A9.3 9.3 0 0 0 12 4z" {...strokeCommon} />
          <circle cx={8.5} cy={10} r={1.1} {...filled} opacity={0.9} />
          <circle cx={12} cy={7.5} r={1.1} {...filled} opacity={0.8} />
          <circle cx={16} cy={10} r={1.1} {...filled} opacity={0.9} />
        </>
      );
    case "BUBBLE":
      return (
        <>
          <path d="M20 12a8 8 0 0 1-8 8 8.9 8.9 0 0 1-3-.5L4 21l1.5-4A8 8 0 1 1 20 12z" {...strokeCommon} />
        </>
      );
    case "BOX":
      return (
        <>
          <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5z" {...strokeCommon} />
          <path d="M4 7.5 12 11l8-3.5M12 11v9" {...strokeCommon} />
        </>
      );
    case "APERTURE":
      return (
        <>
          <circle cx={12} cy={12} r={8} {...strokeCommon} />
          <path d="M12 4l4.5 7.8M12 4 7.5 11.8M12 20l4.5-7.8M12 20l-4.5-7.8M5.2 8.5h9.6M18.8 15.5H9.2" {...strokeCommon} />
        </>
      );
    case "BATTERY":
      return (
        <>
          <rect x={3} y={8} width={15} height={8} rx={1.5} {...strokeCommon} />
          <path d="M20 10.5v3" {...strokeCommon} />
          <path d="M6 11v2" {...subStroke} />
        </>
      );
    case "CAR":
      return (
        <>
          <path d="M4 16l1.5-4.5A2 2 0 0 1 7.4 10h9.2a2 2 0 0 1 1.9 1.5L20 16M4 16h16M4 16v2.4a.6.6 0 0 0 .6.6h1.3l.6-1.5M20 16v2.4a.6.6 0 0 1-.6.6h-1.3l-.6-1.5" {...strokeCommon} />
          <circle cx={7.5} cy={15.5} r={0.9} {...filled} opacity={0.9} />
          <circle cx={16.5} cy={15.5} r={0.9} {...filled} opacity={0.9} />
        </>
      );
    case "PLANE":
      return (
        <>
          <path d="M14 3.5 10 9l-6 1 3.5 3L13 11l4 8 2-1-3.5-7 3.5-1.5" {...strokeCommon} strokeLinejoin="round" />
        </>
      );
    case "CONTROLLER":
      return (
        <>
          <path d="M8 9h.1M16 9h.1M5 11l-1.5 6a2 2 0 0 0 2.6 2.3L9 18h6l2.9 1.3a2 2 0 0 0 2.6-2.3L19 11a7 7 0 0 0-14 0z" {...strokeCommon} />
          <path d="M7 14.5v2M6 15.5h2" {...subStroke} />
        </>
      );
    case "PRISM":
      return (
        <>
          <path d="M12 3 20 19H4z" {...strokeCommon} />
          <path d="M9 14h6l-1.2 2.4h-3.6z" {...filled} opacity={0.8} />
        </>
      );
    case "SLIDER":
      return (
        <>
          <path d="M3 7h13M19 7h2M3 17h7M13 17h8" {...strokeCommon} />
          <circle cx={17} cy={7} r={2.2} {...filled} opacity={0.9} />
          <circle cx={11} cy={17} r={2.2} {...filled} opacity={0.9} />
        </>
      );
    case "FLAME":
      return (
        <>
          <path d="M12 3c1 3 4 4.5 4 8a4 4 0 1 1-8 0c0-1.5.7-2.8 1.5-4C10 8 11 6 12 3z" {...strokeCommon} />
        </>
      );
    default:
      return (
        <>
          <rect x={4} y={4} width={16} height={16} rx={3} {...strokeCommon} />
          <circle cx={12} cy={12} r={3} {...filled} opacity={0.85} />
        </>
      );
  }
}

export type SfGlyphProps = {
  appleName: string;
  categories: string[];
  accent?: string;
  sub?: string;
  className?: string;
};

export function SfGlyph({ appleName, categories, accent, sub, className }: SfGlyphProps) {
  const seed = hash(appleName);
  const kind = pickShape(categories, seed);
  const a = accent ?? "currentColor";
  const s = sub ?? a;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      role="presentation"
      preserveAspectRatio="xMidYMid meet"
    >
      {renderShape(kind, seed, a, s)}
    </svg>
  );
}
