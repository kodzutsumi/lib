import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

import type {
  TestFixtureDefinition,
  TestFixtureMetadata,
} from '../types/mod.ts';

/**
 * Sets the definition for a test fixture.
 *
 * @param definition The test fixture definition to set.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test fixture.
 */
export function setFixtureDefinition(
  definition: TestFixtureDefinition,
  context: DecoratorContext,
): TestFixtureMetadata {
  const metadata = _getFixtureMetadata(context);

  metadata.definition = metadata.definition ?? {};
  metadata.definition = { ...metadata.definition, ...definition };

  return metadata;
}
