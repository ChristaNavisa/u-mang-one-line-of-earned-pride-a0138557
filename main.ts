// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single quiet, earned moment of pride to /output/entry.txt.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He practised the knot a hundred times on the dock, and today the rope held, the boat stayed, and his father nodded once.";

// Gate self-check: 1-240 characters, a single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`line is ${chars.length} characters, must be 1-240`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
