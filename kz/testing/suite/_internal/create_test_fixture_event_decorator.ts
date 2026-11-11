import { EventManager } from './mod.ts';
import type {
  TestCtor,
  TestDecorator,
  TestEvent,
  TestEventListener,
  TestFixtureDecorator,
  TestFixtureEventDecorator,
  TestFixtureEventType,
  TestMethod,
} from '../types/mod.ts';

/**
 * Creates a test fixture event decorator for the specified event type.
 *
 * @param eventType The type of the test fixture event.
 * @returns A test fixture event decorator bound to the specified event type.
 */
export function createTestFixtureEventDecorator(
  eventType: TestFixtureEventType,
): TestFixtureEventDecorator {
  const { addEventListener } = EventManager.fixture;

  function decorator(
    listener?: TestEventListener<TestEvent<typeof eventType>>,
  ): TestFixtureDecorator {
    return (_: TestCtor, context: DecoratorContext): void => {
      if (context.kind !== 'class') {
        throw new Error(
          `@${eventType} can only be applied to classes and methods, but was applied to ${context.kind}`,
        );
      }

      if (!listener) {
        throw new Error(
          `@${eventType} must be provided with a listener function when applied to a class.`,
        );
      }

      addEventListener(eventType, listener, context);
    };
  }

  decorator.use =
    (): TestDecorator =>
    (target: TestMethod, context: ClassMethodDecoratorContext) => {
      if (context.kind !== 'method') {
        throw new Error(
          `@${eventType}.use can only be applied to methods, but was applied to ${context.kind}.`,
        );
      }

      const name = context.name || target.name;

      addEventListener(eventType, [name, context.static], context);
    };

  return decorator;
}
