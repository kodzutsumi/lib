import type { ToBoolean } from '@kz/util/boolean';
import type {
  $PickInverted,
  $PickVote,
  $UseVote,
  $Vote,
} from '@kz/util/capability';

import type { LogicCapabilities } from '../logic_capabilities.ts';
import type { LogicDefaults } from '../logic_defaults.ts';

import type { _GetConditionResult } from './_get_condition_result.ts';

type Capabilities = LogicCapabilities;
type Defaults = LogicDefaults;

/**
 * Computes the result of a logical operation based on the provided operand and settings.
 *
 * @template Operand - The boolean operand or a vote type.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical operation based on the operand and settings.
 * @internal
 */
export type GetLogicResult<
  Operand extends boolean | $UseVote,
  Settings extends Capabilities = Defaults,
> = _GetConditionResult<
  ToBoolean<
    $Vote<Operand, $PickVote<Settings>>,
    Settings & $PickInverted<Settings>
  >,
  Settings
>;
