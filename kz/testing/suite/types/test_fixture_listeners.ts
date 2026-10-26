import type { TestEvent } from './test_event.ts';
import type { TestEventHandler } from './test_event_handler.ts';
import type { TestFixtureEventType } from './test_fixture_event_type.ts';

/**
 * Represents the listeners for a test fixture, keyed by fixture event type.
 */
export type TestFixtureListeners = {
  /**
   * The listener for the `BeforeAll` fixture event.
   */
  [TestFixtureEventType.BeforeAll]?: TestEventHandler<
    TestEvent<TestFixtureEventType.BeforeAll>
  >[];

  /**
   * The listener for the `AfterAll` fixture event.
   */
  [TestFixtureEventType.AfterAll]?: TestEventHandler<
    TestEvent<TestFixtureEventType.AfterAll>
  >[];

  /**
   * The listener for the `BeforeEach` fixture event.
   */
  [TestFixtureEventType.BeforeEach]?: TestEventHandler<
    TestEvent<TestFixtureEventType.BeforeEach>
  >[];

  /**
   * The listener for the `AfterEach` fixture event.
   */
  [TestFixtureEventType.AfterEach]?: TestEventHandler<
    TestEvent<TestFixtureEventType.AfterEach>
  >[];
};
