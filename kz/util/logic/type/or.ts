import type { GetLogicResult, OrResult } from './_internal/mod.ts';

import type { LogicCapabilities } from './logic_capabilities.ts';
import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical OR operation based on the provided operands and settings.
 *
 * @example //TODO(@ebntly): Add an example
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical OR operation based on the values of `OperandA` and `OperandB`.
 */
export type Or<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapabilities = LogicDefaults,
> = GetLogicResult<OrResult<OperandA, OperandB>, Settings>;
