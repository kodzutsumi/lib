import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

import type { TestFixtureMetadata, TestLabel } from '../types/mod.ts';

/**
 * Sets the label for a test fixture.
 *
 * @param label The label to set for the test fixture.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test fixture.
 */
export function setFixtureLabel(
  label: TestLabel,
  context: DecoratorContext,
): TestFixtureMetadata {
  const metadata = _getFixtureMetadata(context);

  metadata.label = label;

  return metadata;
}
