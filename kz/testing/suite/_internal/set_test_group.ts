import { _getTestMetadata } from './_get_test_metadata.ts';

import type { TestLabel, TestMetadata } from '../types/mod.ts';

/**
 * Sets the group for a test.
 *
 * @param name The name of the test.
 * @param group The group or groups to assign to the test.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function setTestGroup(
  name: TestLabel,
  group: TestLabel,
  context: DecoratorContext,
): TestMetadata {
  const metadata = _getTestMetadata(name, context);

  metadata.group = group;

  return metadata;
}
