import type { TestFixtureMetadata } from '../types/mod.ts';
import { _TestSuiteSymbol } from './_constants.ts';

/**
 * Retrieves the metadata for a test fixture from the given decorator context.
 *
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the test fixture.
 */
export function _getFixtureMetadata(
  { metadata }: DecoratorContext,
): TestFixtureMetadata {
  metadata[_TestSuiteSymbol] = metadata[_TestSuiteSymbol] ?? {};

  return metadata[_TestSuiteSymbol] as TestFixtureMetadata;
}
