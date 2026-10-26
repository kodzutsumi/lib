import type { TestDefinition, TestLabel } from '../types/mod.ts';
import { _getTestMetadata } from './_get_test_metadata.ts';

/**
 * Sets the label for a test.
 *
 * @param name The name of the test.
 * @param label The label to assign to the test.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function setTestIteration(
  name: TestLabel,
  count: number,
  context: DecoratorContext,
): TestDefinition {
  const metadata = _getTestMetadata(name, context);

  metadata.definition = metadata.definition ?? {};
  metadata.definition.iterations = count;

  return metadata.definition;
}
