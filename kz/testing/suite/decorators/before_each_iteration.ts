import { createTestEventDecorator } from '../_internal/mod.ts';
import { type TestEventDecorator, TestEventType } from '../types/mod.ts';

/**
 * Creates a test event decorator for the "before each iteration" event, which is triggered before each test iteration runs.
 */
export const BeforeEachIteration: TestEventDecorator = createTestEventDecorator(
  TestEventType['BeforeEachIteration'],
);
