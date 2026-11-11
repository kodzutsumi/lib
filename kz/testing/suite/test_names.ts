import { createTestNameGenerator } from './create_test_name_generator.ts';
import type { TestNameGenerator } from './types/mod.ts';

/**
 * The default test names generator.
 */
export const TestNames: TestNameGenerator = createTestNameGenerator();
