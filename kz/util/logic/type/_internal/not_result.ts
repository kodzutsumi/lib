import type { ToBoolean } from '@kz/util/boolean';
import type { $AsInverted } from '@kz/util/capability';

import type { LogicCapabilities } from '../logic_capabilities.ts';
import type { LogicDefaults } from '../logic_defaults.ts';

type Capabilities = LogicCapabilities;
type Defaults = LogicDefaults;

/**
 * Computes the result of a logical NOT operation on a boolean operand.
 *
 * @template Operand - The boolean operand to negate.
 * @template Settings - The logic capabilities and settings to apply during the operation
 * @returns The negated boolean value of the operand, considering the provided settings.
 * @internal
 */
export type NotResult<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = ToBoolean<Operand, Settings & $AsInverted>;
