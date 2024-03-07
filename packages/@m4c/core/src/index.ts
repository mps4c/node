import { closeSync, existsSync, openSync } from "node:fs";
import { resolve } from "node:path";

export function findWorkspace(from = "."): string | undefined {
  let current = resolve(from);
  while (true) {
    if (existsSync(resolve(current, ".workspace.ft"))) {
      return current;
    }
    const next = resolve(current, "..");
    if (next === current) return undefined;
    current = next;
  }
}

export function initWorkspace(to = "."): void {
  const fileName = resolve(to, ".workspace.ft");
  closeSync(openSync(fileName, "w"));
}
