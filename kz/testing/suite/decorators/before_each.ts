import { createTestFixtureEventDecorator } from '../_internal/mod.ts';
import {
  type TestFixtureEventDecorator,
  TestFixtureEventType,
} from '../types/mod.ts';

/**
 * Creates a test fixture event decorator for the "before each" event, which is triggered before each test in a fixture runs.
 */
export const BeforeEach: TestFixtureEventDecorator =
  createTestFixtureEventDecorator(TestFixtureEventType.BeforeEach);
