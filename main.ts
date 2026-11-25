import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh: a single funny line, written to the output file.
// The line must be 1-200 characters of UTF-8 text, one line, no setup.
const JOKE =
  "I bought noise-cancelling headphones to finally hear myself think. Turns out there's nothing to hear.";

// The gate only accepts 1-200 characters, so fail loudly instead of
// submitting a line the scorer would refuse.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${JOKE.length}`);
}

function main(): void {
  const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  writeFileSync(`${out}/entry.txt`, JOKE, "utf8");
}

main();
