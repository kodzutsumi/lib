import type { TestEvent } from './test_event.ts';
import type { TestEventHandler } from './test_event_handler.ts';
import type { TestEventType } from './test_event_type.ts';

/**
 * Represents the listeners for a test, keyed by test event type.
 */
export type TestListeners = {
  /**
   * The listener for the `Before` test event.
   */
  [TestEventType.Before]?: TestEventHandler<TestEvent<TestEventType.Before>>[];

  /**
   * The listener for the `After` test event.
   */
  [TestEventType.After]?: TestEventHandler<TestEvent<TestEventType.After>>[];

  /**
   * The listener for the `BeforeEachCase` test event.
   */
  [TestEventType.BeforeEachCase]?: TestEventHandler<
    TestEvent<TestEventType.BeforeEachCase>
  >[];

  /**
   * The listener for the `AfterEachCase` test event.
   */
  [TestEventType.AfterEachCase]?: TestEventHandler<
    TestEvent<TestEventType.AfterEachCase>
  >[];
  /**
   * The listener for the `BeforeEachIteration` test event.
   */
  [TestEventType.BeforeEachIteration]?: TestEventHandler<
    TestEvent<TestEventType.BeforeEachIteration>
  >[];

  /**
   * The listener for the `AfterEachIteration` test event.
   */
  [TestEventType.AfterEachIteration]?: TestEventHandler<
    TestEvent<TestEventType.AfterEachIteration>
  >[];

  /**
   * The listener for the `OnRetry` test event.
   */
  [TestEventType.OnRetry]?: TestEventHandler<
    TestEvent<TestEventType.OnRetry>
  >[];

  /**
   * The listener for the `OnTimeout` test event.
   */
  [TestEventType.OnTimeout]?: TestEventHandler<
    TestEvent<TestEventType.OnTimeout>
  >[];
};
