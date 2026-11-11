import {
  runTestFixture,
  setFixtureLabel,
  setFixtureName,
} from '../_internal/mod.ts';
import type {
  TestCtor,
  TestFixtureDecorator,
  TestLabel,
} from '../types/mod.ts';

/**
 * Decorator for marking a class as a test fixture.
 *
 * @param label The label for the test fixture.
 * @returns A class decorator.
 */
export function TestFixture(label?: TestLabel): TestFixtureDecorator {
  return (target: TestCtor, context: DecoratorContext) => {
    if (context.kind !== 'class') {
      throw new Error(
        `@TestFixture can only be applied to classes, but was applied to ${context.kind}`,
      );
    }

    const name = context.name || target.name;

    const metadata = setFixtureName(name, context);

    if (label) {
      setFixtureLabel(label, context);
    }

    if (metadata.definition?.ignore) {
      return;
    }

    runTestFixture(target, context);
  };
}
