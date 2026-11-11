import type { TestEvent } from './test_event.ts';
import type { TestEventListener } from './test_event_listener.ts';
import type { TestEventListenerReference } from './test_event_listener_reference.ts';

/**
 * Represents a handler for test events, which can be either a test event listener or a reference to one.
 *
 * @template Event - The type of test event the handler listens to.
 */
export type TestEventHandler<
  Event extends TestEvent = TestEvent<string, unknown>,
> = TestEventListener<Event> | TestEventListenerReference;
