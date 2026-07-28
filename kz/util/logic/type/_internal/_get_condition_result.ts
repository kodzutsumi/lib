import type {
  $Else,
  $Then,
  $UseElse,
  $UseNullSetting,
  $UseThen,
} from '@kz/util/capability';

import type { _GetResult } from './_get_result.ts';

type Capabilities = $UseThen | $UseElse | $UseNullSetting;
type Defaults = $Then<true> | $Else<false>;

/**
 * Determines the result of a condition based on the operand and capability settings.
 *
 * ## Capabilities
 * | Capability | Default/Implied Setting | Description |
 * |------------|-------------------------|-------------|
 * | {@linkcode $UseThen} | {@linkcode $Then | $Then<true>} | Specifies the type to return if the operand is `true`. |
 * | {@linkcode $UseElse} | {@linkcode $Else | $Else<false>} | Specifies the type to return if the operand is `false`. |
 *
 * @template Operand - The boolean operand to evaluate.
 * @template Settings - The logic capabilities settings.
 * @returns The type determined by the operand and the specified capabilities.
 * @internal
 */
export type _GetConditionResult<
  Operand extends boolean,
  Settings extends Capabilities = Defaults,
> = Settings extends $Then<infer ThenType>
  ? Settings extends $Else<infer ElseType>
    ? _GetResult<Operand, ThenType, ElseType>
  : _GetResult<Operand, ThenType, false>
  : Settings extends $Else<infer ElseType> ? _GetResult<Operand, true, ElseType>
  : _GetResult<Operand, true, false>;
