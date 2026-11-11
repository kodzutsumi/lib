import type { TestLabel, TestMetadata } from '../types/mod.ts';
import { _getFixtureMetadata } from './_get_fixture_metadata.ts';
import { _createLabel } from './_create_label.ts';

/**
 * Retrieves the metadata for a specific test within a test fixture.
 *
 * @param name The name of the test.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
export function _getTestMetadata(
  name: TestLabel,
  context: DecoratorContext,
): TestMetadata {
  if (context.kind === 'class') {
    const metadata = _getFixtureMetadata(context);

    return metadata.tests[name];
  }

  if (context.kind !== 'method') {
    throw new Error(
      `Test decorators can only be applied to methods, but was applied to ${context.kind} on ${name.toString()}.`,
    );
  }

  const metadata = _getFixtureMetadata(context);

  metadata.tests = metadata.tests ?? {};
  metadata.tests[name] = metadata.tests[name] ?? {
    name,
    static: context.static,
  };
  metadata.tests[name].label = metadata.tests[name].label || _createLabel(name);

  return metadata.tests[name];
}
