/**
 * Represents a test event with a type and associated data.
 *
 * @template Type - The type of the test event.
 * @template Data - The type of the test event data.
 */
export type TestEvent<
  Type extends string = string,
  Data extends unknown = unknown,
> = {
  /**
   * The type of the test event.
   */
  type: Type;

  /**
   * The data associated with the test event.
   */
  data: Data;
};
