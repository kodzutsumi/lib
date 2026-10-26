import type { TestDecorator } from './test_decorator.ts';
import type { TestEvent } from './test_event.ts';
import type { TestEventListener } from './test_event_listener.ts';
import type { TestEventType } from './test_event_type.ts';

/**
 * Binds a test event listener to a specific test event decorator.
 */
export type TestEventDecorator = (
  listener?: TestEventListener<TestEvent<TestEventType>>,
) => TestDecorator;
