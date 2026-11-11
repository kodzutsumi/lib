import { createTestFixtureEventDecorator } from '../_internal/mod.ts';
import {
  type TestFixtureEventDecorator,
  TestFixtureEventType,
} from '../types/mod.ts';

/**
 * Creates a test fixture event decorator for the "after all" event, which is triggered after all tests in a fixture have run.
 */
export const AfterAll: TestFixtureEventDecorator =
  createTestFixtureEventDecorator(TestFixtureEventType.AfterAll);
