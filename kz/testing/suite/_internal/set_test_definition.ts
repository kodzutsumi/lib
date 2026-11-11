import { _getTestMetadata } from './_get_test_metadata.ts';

import type { TestDefinition, TestLabel } from '../types/mod.ts';

/**
 * Sets the definition for a test.
 *
 * @param name The name of the test.
 * @param definition The test definition to set.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function setTestDefinition(
  name: TestLabel,
  definition: TestDefinition,
  context: DecoratorContext,
): TestDefinition {
  const metadata = _getTestMetadata(name, context);

  metadata.definition = metadata.definition ?? {};
  metadata.definition = { ...metadata.definition, ...definition };

  return metadata.definition;
}
