import type { TestLabel } from './test_label.ts';

/**
 * Represents a reference to a test event listener by its label.
 */
export type TestEventListenerReference = [TestLabel, boolean];
