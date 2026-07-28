import type { GetLogicResult } from './_internal/mod.ts';

import type { LogicCapabilities } from './logic_capabilities.ts';
import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical operation based on the provided operand and settings.
 *
 * @example //TODO(@ebntly): Add an example
 *
 * @template Operand - The boolean operand.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical operation based on the operand and settings.
 */
export type If<
  Operand extends boolean,
  Settings extends LogicCapabilities = LogicDefaults,
> = GetLogicResult<Operand, Settings>;
