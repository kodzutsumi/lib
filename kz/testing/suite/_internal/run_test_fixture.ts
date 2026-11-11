import { type TestCtor, TestFixtureEventType } from '../types/mod.ts';

import { _groupTests } from './_group_tests.ts';
import { EventManager } from './event_manager.ts';
import { _runTests } from './_run_tests.ts';
import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

/**
 * Runs the tests for the specified target.
 *
 * @param target The test constructor containing the tests to run.
 * @param context The Deno test context.
 */
export function runTestFixture(
  target: TestCtor,
  context: DecoratorContext,
): void {
  const { fixture } = EventManager;
  const metadata = _getFixtureMetadata(context);
  const { name, tests, definition, label } = metadata;
  const fixtureName = (label || name).toString();

  if (definition?.ignore) {
    return;
  }

  if (!tests || Object.keys(tests).length === 0) {
    Deno.test(fixtureName, () => {
      console.warn(
        `\x1b[33mNo tests found for fixture "${fixtureName}".\nEnsure that the @Test decorator is applied to test methods.`,
      );
    });

    return;
  }

  const grouped = _groupTests(tests);
  const { retry: _, ...rest } = definition ?? {};

  Deno.test(fixtureName, {
    ...rest,
  }, async (t0) => {
    await fixture.dispatchEvent(target, TestFixtureEventType.BeforeAll, {
      type: TestFixtureEventType.BeforeAll,
    }, metadata);

    for await (const [group, groupTests] of Object.entries(grouped)) {
      if (group === 'default') {
        await _runTests(target, t0, groupTests, context);
      } else {
        await t0.step(group.toString(), async (t1) => {
          await _runTests(target, t1, groupTests, context);
        });
      }
    }

    await fixture.dispatchEvent(target, TestFixtureEventType.AfterAll, {
      type: TestFixtureEventType.AfterAll,
    }, metadata);
  });
}
