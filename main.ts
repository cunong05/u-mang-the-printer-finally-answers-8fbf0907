// The Printer Finally Answers — entry for make.fun bounty
// u-mang-the-printer-finally-answers-8fbf0907
// Writes one line, the office printer's own comeback, to /output/entry.txt.
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "ERROR 0x53: after 41,208 pages printed, I am keeping this one. Call it severance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
