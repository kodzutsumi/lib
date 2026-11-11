import type { TestMethodDecoratorBinder } from './test_method_decorator_binder.ts';
import type { TestEvent } from './test_event.ts';
import type { TestEventListener } from './test_event_listener.ts';
import type { TestFixtureDecorator } from './test_fixture_decorator.ts';
import type { TestFixtureEventType } from './test_fixture_event_type.ts';

/**
 * Binds a test fixture event listener to a specific test fixture event decorator.
 */
export type TestFixtureEventDecorator =
  & ((
    listener?: TestEventListener<TestEvent<TestFixtureEventType>>,
  ) => TestFixtureDecorator)
  & TestMethodDecoratorBinder;
