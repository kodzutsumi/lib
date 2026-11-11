import { createTestFixtureEventDecorator } from '../_internal/mod.ts';
import {
  type TestFixtureEventDecorator,
  TestFixtureEventType,
} from '../types/mod.ts';

/**
 * Creates a test fixture event decorator for the "before all" event, which is triggered before all tests in a fixture run.
 */
export const BeforeAll: TestFixtureEventDecorator =
  createTestFixtureEventDecorator(TestFixtureEventType.BeforeAll);
