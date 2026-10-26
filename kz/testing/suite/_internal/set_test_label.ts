import { _getTestMetadata } from './_get_test_metadata.ts';

import type { TestLabel, TestMetadata } from '../types/mod.ts';

/**
 * Sets the label for a test.
 *
 * @param name The name of the test.
 * @param label The label to assign to the test.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function setTestLabel(
  name: TestLabel,
  label: TestLabel,
  context: DecoratorContext,
): TestMetadata {
  const metadata = _getTestMetadata(name, context);

  metadata.label = label;

  return metadata;
}
