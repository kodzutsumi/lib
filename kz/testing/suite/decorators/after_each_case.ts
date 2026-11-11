import { createTestEventDecorator } from '../_internal/mod.ts';
import { type TestEventDecorator, TestEventType } from '../types/mod.ts';

/**
 * Creates a test event decorator for the "after each case" event, which is triggered after each test case has run.
 */
export const AfterEachCase: TestEventDecorator = createTestEventDecorator(
  TestEventType.AfterEachCase,
);
