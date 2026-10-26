import type { TestLabel, TestMetadata } from '../types/mod.ts';
import { _getTestMetadata } from './_get_test_metadata.ts';

/**
 * Adds a test case to the test metadata.
 *
 * @param name The name of the test.
 * @param args The arguments for the test case.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function addTestCase<Args extends unknown[] = unknown[]>(
  name: TestLabel,
  args: Args,
  context: DecoratorContext,
): TestMetadata {
  const metadata = _getTestMetadata(name, context);

  metadata.definition = metadata.definition ?? {};
  metadata.definition.cases = metadata.definition.cases ?? [];

  metadata.definition.cases.push(args);

  return metadata;
}
