import { createTestFixtureEventDecorator } from '../_internal/mod.ts';
import {
  type TestFixtureEventDecorator,
  TestFixtureEventType,
} from '../types/mod.ts';

/**
 * Creates a test fixture event decorator for the "after each" event, which is triggered after each test in a fixture has run.
 */
export const AfterEach: TestFixtureEventDecorator =
  createTestFixtureEventDecorator(TestFixtureEventType.AfterEach);
