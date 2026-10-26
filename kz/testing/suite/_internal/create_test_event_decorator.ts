import { EventManager } from './mod.ts';
import type {
  TestDecorator,
  TestEvent,
  TestEventDecorator,
  TestEventListener,
  TestEventType,
  TestMethod,
} from '../types/mod.ts';
import { _isTestMethod } from './_is_test_method.ts';

/**
 * Creates a test event decorator for the specified event type.
 *
 * @param eventType The type of the test event.
 * @returns A test event decorator bound to the specified event type.
 */
export function createTestEventDecorator(
  eventType: TestEventType,
): TestEventDecorator {
  const { addEventListener } = EventManager.test;

  return (
    listener?: TestEventListener<TestEvent<typeof eventType>>,
  ): TestDecorator => {
    return (target: TestMethod, context: ClassMethodDecoratorContext): void => {
      if (context.kind !== 'method') {
        throw new Error(
          `@${eventType} can only be applied to methods, but was applied to ${context.kind}`,
        );
      }

      const name = context.name || target.name;

      if (_isTestMethod(name, context)) {
        if (!listener) {
          throw new Error(
            `@${eventType} must be provided with a listener function when applied to a test method (@Test).`,
          );
        }

        addEventListener(name, eventType, listener, context);

        return;
      }

      if (listener) {
        throw new Error(
          `@${eventType} cannot be applied to non-test methods with a listener function.`,
        );
      }

      addEventListener(name, eventType, [name, context.static], context);
    };
  };
}
