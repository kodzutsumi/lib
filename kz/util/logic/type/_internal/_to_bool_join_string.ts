import type { _ToBoolString } from './_to_bool_string.ts';

/**
 * Converts two boolean operands to their string representation in the format "OperandA/OperandB".
 *
 * @template OperandA - The first boolean operand to convert.
 * @template OperandB - The second boolean operand to convert.
 * @returns The string representation of the operands in the format "OperandA/OperandB".
 * @internal
 */
export type _ToBoolJoinString<
  OperandA extends boolean,
  OperandB extends boolean,
> = `${_ToBoolString<OperandA>}/${_ToBoolString<OperandB>}`;
