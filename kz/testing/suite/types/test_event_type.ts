/**
 * An enumeration of the different events that can occur during a test execution.
 */
export enum TestEventType {
  /**
   * The event that occurs after a test has been executed.
   */
  After = 'after',

  /**
   * The event that occurs before a test is executed.
   */
  Before = 'before',

  /**
   * The event that occurs after each iteration of a test has been executed.
   */
  AfterEachIteration = 'afterEachIteration',

  /**
   * The event that occurs before each iteration of a test is executed.
   */
  BeforeEachIteration = 'beforeEachIteration',

  /**
   * The event that occurs after each test case has been executed.
   */
  AfterEachCase = 'afterEachCase',

  /**
   * The event that occurs before each test case is executed.
   */
  BeforeEachCase = 'beforeEachCase',

  /**
   * The event that occurs when a test times out.
   */
  OnTimeout = 'onTimeout',

  /**
   * The event that occurs when a test is retried.
   */
  OnRetry = 'onRetry',
}
