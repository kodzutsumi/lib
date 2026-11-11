import {
  type TestCaseArgumentData,
  type TestCtor,
  type TestData,
  TestEventType,
  TestFixtureEventType,
  type TestIterationData,
  type TestMetadata,
} from '../types/mod.ts';
import { _getFixtureMetadata } from './_get_fixture_metadata.ts';

import { EventManager } from './event_manager.ts';

/**
 * Runs the provided tests within the given test context.
 *
 * @param target The test class constructor.
 * @param testContext The Deno test context.
 * @param tests An array of test metadata objects.
 * @param context The decorator context.
 */
export async function _runTests(
  target: TestCtor,
  testContext: Deno.TestContext,
  tests: TestMetadata[],
  context: DecoratorContext,
): Promise<void> {
  const { test, fixture } = EventManager;
  const metadata = _getFixtureMetadata(context);

  for await (const testData of tests) {
    const { name, static: isStatic, label, definition } = testData;
    const testObject = isStatic ? target : target.prototype;
    const testMethod = testObject[name];
    const testName = (label || name).toString();
    const cases = definition?.cases ?? [[]];
    const iterations = definition?.iterations ?? 1;

    await testContext.step(testName, async () => {
      await fixture.dispatchEvent(target, TestFixtureEventType.BeforeEach, {
        type: TestFixtureEventType.BeforeEach,
        data: null,
      }, metadata);
      for await (const [caseIndex, args] of cases.entries()) {
        const caseParity = caseIndex % 2 === 0 ? 'even' : 'odd';
        const casePosition = caseIndex === 0
          ? 'first'
          : caseIndex === cases.length - 1
          ? 'last'
          : 'middle';
        const caseData: TestCaseArgumentData = {
          arguments: args,
          metadata: {
            index: caseIndex,
            length: cases.length,
            progress: (caseIndex + 1) / cases.length,
            parity: caseParity,
            even: caseParity === 'even',
            odd: caseParity === 'odd',
            position: casePosition,
            first: casePosition === 'first',
            last: casePosition === 'last',
            middle: casePosition === 'middle',
          },
        };
        cases.length > 1 &&
          test.dispatchEvent(target, TestEventType.BeforeEachCase, {
            type: TestEventType.BeforeEachCase,
            data: caseData,
          }, testData);
        for await (const i of Array.from({ length: iterations }, (_, i) => i)) {
          const iterationParity = i % 2 === 0 ? 'even' : 'odd';
          const iterationPosition = i === 0
            ? 'first'
            : i === iterations - 1
            ? 'last'
            : 'middle';
          const iterationData: TestIterationData = {
            index: i,
            length: iterations,
            progress: (i + 1) / iterations,
            parity: iterationParity,
            even: iterationParity === 'even',
            odd: iterationParity === 'odd',
            position: iterationPosition,
            first: iterationPosition === 'first',
            last: iterationPosition === 'last',
            middle: iterationPosition === 'middle',
          };

          iterations > 1 &&
            test.dispatchEvent(target, TestEventType.BeforeEachIteration, {
              type: TestEventType.BeforeEachIteration,
              data: iterationData,
            }, testData);
          const data: TestData = {
            case: caseData,
            iteration: iterationData,
          };
          await testMethod.call(target, data);

          iterations > 1 &&
            test.dispatchEvent(target, TestEventType.AfterEachIteration, {
              type: TestEventType.AfterEachIteration,
              data: iterationData,
            }, testData);
        }

        cases.length > 1 &&
          test.dispatchEvent(target, TestEventType.AfterEachCase, {
            type: TestEventType.AfterEachCase,
            data: caseData,
          }, testData);
      }

      await fixture.dispatchEvent(target, TestFixtureEventType.AfterEach, {
        type: TestFixtureEventType.AfterEach,
        data: null,
      }, metadata);
    });
  }
}
