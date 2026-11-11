import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

import type { TestFixtureMetadata, TestLabel } from '../types/mod.ts';
import { _createLabel } from './_create_label.ts';

/**
 * Sets the name for a test fixture.
 *
 * @param name The name to set for the test fixture.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test fixture.
 */
export function setFixtureName(
  name: TestLabel,
  context: DecoratorContext,
): TestFixtureMetadata {
  const metadata = _getFixtureMetadata(context);

  metadata.name = name;
  metadata.label = metadata.label || _createLabel(name);

  return metadata;
}
