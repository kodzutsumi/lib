import type { TestCtor } from '../types/test_ctor.ts';
import type {
  TestEvent,
  TestEventHandler,
  TestEventType,
  TestFixtureEventType,
  TestFixtureMetadata,
  TestLabel,
  TestMetadata,
} from '../types/mod.ts';
import { _getFixtureMetadata } from './_get_fixture_metadata.ts';
import { _getTestMetadata } from './_get_test_metadata.ts';

/**
 * Adds an event listener for a specific fixture event type.
 *
 * @param eventType The type of the fixture event.
 * @param listener The event listener function or method tuple.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the test fixture.
 */
function addFixtureEventListener<Type extends TestFixtureEventType>(
  eventType: Type,
  listener: TestEventHandler<TestEvent<Type>>,
  context: DecoratorContext,
): TestFixtureMetadata {
  const metadata = _getFixtureMetadata(context);

  metadata.eventListeners = metadata.eventListeners ?? {};
  metadata.eventListeners[eventType] = metadata.eventListeners[eventType] ?? [];
  (metadata.eventListeners[eventType] as TestEventHandler<TestEvent<Type>>[])
    .push(listener);

  return metadata;
}

/**
 * Dispatches a fixture event to all registered listeners for the specified event type.
 *
 * @param target The test fixture constructor.
 * @param eventType The type of the fixture event.
 * @param data The event data to pass to the listeners.
 * @param context The decorator context containing the metadata.
 */
async function dispatchFixtureEvent<
  Type extends TestFixtureEventType,
  Data extends unknown = unknown,
>(
  target: TestCtor,
  eventType: Type,
  data: Data,
  metadata: TestFixtureMetadata,
): Promise<void> {
  const listeners = metadata.eventListeners?.[eventType] as TestEventHandler<
    TestEvent<Type>
  >[] | undefined;

  if (listeners) {
    for await (const listener of listeners) {
      if (typeof listener === 'function') {
        await listener({ type: eventType, data });
      } else {
        const [methodName, isStatic] = listener;
        const targetMethod = isStatic
          ? target[methodName as keyof typeof target]
          : target.prototype[methodName];

        if (typeof targetMethod !== 'function') {
          throw new Error(
            `Method ${String(methodName)} is not a function on target`,
          );
        }

        await targetMethod.call(isStatic ? target : target.prototype, {
          type: eventType,
          data,
        });
      }
    }
  }
}

/**
 * Dispatches a test event to all registered listeners for the specified event type.
 *
 * @param target The test constructor.
 * @param eventType The type of the test event.
 * @param data The event data to pass to the listeners.
 * @param context The decorator context containing the metadata.
 */
async function dispatchTestEvent<
  Type extends TestEventType,
  Data extends unknown = unknown,
>(
  target: TestCtor,
  eventType: Type,
  data: Data,
  metadata: TestMetadata,
): Promise<void> {
  const listeners = metadata.eventListeners?.[eventType] as TestEventHandler<
    TestEvent<Type>
  >[] | undefined;

  if (listeners) {
    for await (const listener of listeners) {
      if (typeof listener === 'function') {
        await listener({ type: eventType, data });
      } else {
        const [methodName, isStatic] = listener;
        const targetMethod = isStatic
          ? target[methodName as keyof typeof target]
          : target.prototype[methodName];

        if (typeof targetMethod !== 'function') {
          throw new Error(
            `Method ${String(methodName)} is not a function on target`,
          );
        }

        await targetMethod.call(isStatic ? target : target.prototype, {
          type: eventType,
          data,
        });
      }
    }
  }
}

/**
 * Adds an event listener for a specific test event type.
 *
 * @param name The name of the test.
 * @param eventType The type of the test event.
 * @param listener The event listener function or method tuple.
 * @param context The decorator context containing the metadata.
 * @returns The metadata for the specified test.
 */
function addTestEventListener<Type extends TestEventType>(
  name: TestLabel,
  eventType: Type,
  listener: TestEventHandler<TestEvent<Type>>,
  context: DecoratorContext,
): TestMetadata {
  const metadata = _getTestMetadata(name, context);

  metadata.eventListeners = metadata.eventListeners ?? {};
  metadata.eventListeners[eventType] = metadata.eventListeners[eventType] ?? [];
  (metadata.eventListeners[eventType] as TestEventHandler<TestEvent<Type>>[])
    .push(listener);

  return metadata;
}

/**
 * The EventManager provides methods to add and dispatch events for both test fixtures and individual tests.
 */
export const EventManager = {
  /**
   * The fixture section provides methods to add and dispatch events for test fixtures.
   */
  fixture: {
    /**
     * Adds an event listener for a specific fixture event type.
     */
    addEventListener: addFixtureEventListener,

    /**
     * Dispatches a fixture event to all registered listeners for the specified event type.
     */
    dispatchEvent: dispatchFixtureEvent,
  },
  /**
   * The test section provides methods to add and dispatch events for individual tests.
   */
  test: {
    /**
     * Adds an event listener for a specific test event type.
     */
    addEventListener: addTestEventListener,

    /**
     * Dispatches a test event to all registered listeners for the specified event type.
     */
    dispatchEvent: dispatchTestEvent,
  },
};
