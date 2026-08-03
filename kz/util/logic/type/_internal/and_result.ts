import type { $AsFalseMajority } from '@kz/util/capability';
import type { _ToBoolJoinString } from './_to_bool_join_string.ts';

/**
 * Computes the result of a logical AND operation between two boolean operands.
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @returns The result of the logical AND operation based on the values of `OperandA` and `OperandB`.
 * @internal
 */
export type AndResult<
  OperandA extends boolean,
  OperandB extends boolean,
> = {
  /**
   * `true/true` results in `true`.
   */
  'true/true': true;

  /**
   * `true/false` results in `false`.
   */
  'true/false': false;

  /**
   * `false/true` results in `false`.
   */
  'false/true': false;

  /**
   * `false/false` results in `false`.
   */
  'false/false': false;

  /**
   * Non-unanimous majority of `false`.
   *
   * - `true/true` - `true`
   * - `true/false` - `false`
   * - `false/true` - `false`
   * - `false/false` - `false`
   */
  'boolean/boolean': $AsFalseMajority;
  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/true` - `true`
   * - `false/true` - `false`
   */
  'boolean/true': boolean;

  /**
   * Non-unanimous majority of `false`.
   *
   * - `true/true` - `true`
   * - `true/false` - `false`
   * - `false/false` - `false`
   */
  'boolean/false': $AsFalseMajority;

  /**
   * Tie vote between `true` and `false`.
   *
   * - `true/true` - `true`
   * - `true/false` - `false`
   */
  'true/boolean': boolean;

  /**
   * Unanimously `false`.
   *
   * - `false/true` - `false`
   * - `false/false` - `false`
   */
  'false/boolean': false;
}[_ToBoolJoinString<OperandA, OperandB>];
