import { createTestEventDecorator } from '../_internal/mod.ts';
import { type TestEventDecorator, TestEventType } from '../types/mod.ts';

/**
 * Creates a test event decorator for the "before each case" event, which is triggered before each test case runs.
 */
export const BeforeEachCase: TestEventDecorator = createTestEventDecorator(
  TestEventType.BeforeEachCase,
);
