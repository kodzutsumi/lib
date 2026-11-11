import type { TestEvent } from './test_event.ts';

/**
 * Represents a test event listener function.
 *
 * @template Event - The type of the test event.
 */
export type TestEventListener<Event extends TestEvent = TestEvent> = (
  event: Event,
) => void | Promise<void>;
