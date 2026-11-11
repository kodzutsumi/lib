import { createTestEventDecorator } from '../_internal/mod.ts';
import { type TestEventDecorator, TestEventType } from '../types/mod.ts';

/**
 * Creates a test event decorator for the "after each iteration" event, which is triggered after each test iteration has run.
 */
export const AfterEachIteration: TestEventDecorator = createTestEventDecorator(
  TestEventType.AfterEachIteration,
);
