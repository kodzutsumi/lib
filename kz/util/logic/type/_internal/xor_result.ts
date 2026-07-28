import type { _ToBoolJoinString } from './_to_bool_join_string.ts';

/**
 * Computes the result of a logical XOR operation between two boolean operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @returns The result of the logical OR operation based on the values of `OperandA` and `OperandB`.
 * @internal
 */
export type XorResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  /**
   * `true/true` results in `false`.
   */
  'true/true': false;

  /**
   * `true/false` results in `true`.
   */
  'true/false': true;

  /**
   * `false/true` results in `true`.
   */
  'false/true': true;

  /**
   * `false/false` results in `false`.
   */
  'false/false': false;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/true` - `false`
   * - `true/false` - `true`
   * - `false/true` - `true`
   * - `false/false` - `false`
   */
  'boolean/boolean': boolean;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/true` - `false`
   * - `false/true` - `true`
   */
  'boolean/true': boolean;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/false` - `true`
   * - `false/false` - `false`
   */
  'boolean/false': boolean;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/true` - `false`
   * - `true/false` - `true`
   */
  'true/boolean': boolean;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `false/true` - `true`
   * - `false/false` - `false`
   */
  'false/boolean': boolean;
}[_ToBoolJoinString<OperandA, OperandB>];
