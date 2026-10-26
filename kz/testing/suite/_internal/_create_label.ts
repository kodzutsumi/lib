import type { TestLabel } from '../types/mod.ts';

export function _createLabel(name: TestLabel): string {
  const stringified = name.toString();
  const cleaned = stringified.replace(/(_|-)/g, ' ').replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase()).trim();

  return cleaned;
}
