// One Word From Your Ex — u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// The entry is a single word: the word an ex would use to describe me.
// It is written to /output/entry.txt, exactly as the gate expects:
// UTF-8 text, 1 to 24 characters, no extra words, no punctuation.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Exhausting";

// The gate refuses anything that is not one word of 1-24 characters,
// so check the word before writing it: a single token, no whitespace,
// no trailing newline in the file itself.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
