import type { $AsTrueMajority } from '@kz/util/capability';
import type { _ToBoolJoinString } from './_to_bool_join_string.ts';

/**
 * Computes the result of a logical OR operation between two boolean operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @returns The result of the logical OR operation based on the values of `OperandA` and `OperandB`.
 * @internal
 */
export type OrResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  /**
   * `true/true` results in `true`.
   */
  'true/true': true;

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
   * Non-unanimous majority of `true`.
   *
   * - `true/true` - `true`
   * - `true/false` - `true`
   * - `false/true` - `true`
   * - `false/false` - `false`
   */
  'boolean/boolean': $AsTrueMajority;

  /**
   * Unanimous majority of `true`.
   *
   * - `true/true` - `true`
   * - `false/true` - `true`
   */
  'boolean/true': true;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/false` - `true`
   * - `false/false` - `false`
   */
  'boolean/false': boolean;

  /**
   * Unanimous majority of `true`.
   *
   * - `true/true` - `true`
   * - `true/false` - `true`
   */
  'true/boolean': true;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `false/true` - `true`
   * - `false/false` - `false`
   */
  'false/boolean': boolean;
}[_ToBoolJoinString<OperandA, OperandB>];
