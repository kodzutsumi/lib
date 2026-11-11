/**
 * Represents the definition of a test fixture.
 */
export type TestFixtureDefinition = Omit<
  Deno.TestDefinition,
  'name' | 'fn' | 'repeats'
>;
