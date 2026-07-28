/**
 * Converts a boolean operand to its string representation.
 *
 * @template Operand - The boolean operand to convert.
 * @returns The string representation of the operand: `'true'` for `true`, `'false'` for `false`, or `'boolean'` for a non-strict boolean.
 * @internal
 */
export type _ToBoolString<
  Operand extends boolean,
> = [Operand] extends [true] ? 'true'
  : [Operand] extends [false] ? 'false'
  : 'boolean';
