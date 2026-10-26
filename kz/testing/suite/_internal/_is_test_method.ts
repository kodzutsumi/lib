import type { TestLabel } from '../types/mod.ts';
import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

/**
 * Retrieves the metadata for a specific test within a test fixture.
 *
 * @param name The name of the test.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function _isTestMethod(
  name: TestLabel,
  context: DecoratorContext,
): boolean {
  const metadata = _getFixtureMetadata(context);

  metadata.tests = metadata.tests ?? {};

  const exists = metadata.tests[name] ? true : false;

  return exists;
}
