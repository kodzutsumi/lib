/**
 * Determines the result type based on a boolean operand and specified "then" and "else" types.
 *
 * ## Behavior
 * | Operand | Result Type |
 * |---------|-------------|
 * | `true`  | `ThenType`  |
 * | `false` | `ElseType`  |
 * | `boolean` | `ThenType \| ElseType` |
 *
 * @template Operand - The boolean operand to evaluate.
 * @template ThenType - The type to return if the operand is `true`.
 * @template ElseType - The type to return if the operand is `false`.
 * @returns The type determined by the operand: `ThenType` if `true`, `ElseType` if `false`, or a union of both if the operand is not strictly `true` or `false`.
 * @internal
 */
export type _GetResult<
  Operand extends boolean,
  ThenType,
  ElseType,
> = Operand extends true ? ThenType
  : Operand extends false ? ElseType
  : ThenType | ElseType;
