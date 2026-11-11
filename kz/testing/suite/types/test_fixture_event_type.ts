/**
 * An enumeration of the different events that can occur during the execution of a test fixture.
 */
export enum TestFixtureEventType {
  /**
   * The event that occurs before all tests in the fixture are executed.
   */
  BeforeAll = 'beforeAll',

  /**
   * The event that occurs after all tests in the fixture have been executed.
   */
  AfterAll = 'afterAll',

  /**
   * The event that occurs before each test in the fixture is executed.
   */
  BeforeEach = 'beforeEach',

  /**
   * The event that occurs after each test in the fixture has been executed.
   */
  AfterEach = 'afterEach',
}
