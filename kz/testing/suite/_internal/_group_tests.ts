import type { TestHandlers, TestLabel, TestMetadata } from '../types/mod.ts';

export function _groupTests(
  tests: TestHandlers,
): Record<TestLabel, TestMetadata[]> {
  const testMetadata = Object.values(tests);
  const grouped = testMetadata.reduce((acc, test) => {
    const group = test.group ?? 'default';

    acc[group] = acc[group] ?? [];

    acc[group].push(test);

    return acc;
  }, { 'default': [] } as Record<TestLabel, TestMetadata[]>);

  return grouped;
}
