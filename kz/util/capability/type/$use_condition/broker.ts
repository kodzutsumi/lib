import type { $Else } from '../$use_else/mod.ts';
import type { $Then } from '../$use_then/mod.ts';

/**
 * A special capability setting that defines the types for the {@linkcode $Then} and {@linkcode $Else} capabilities
 * based on the provided `ThenType` and `ElseType`.
 *
 * @template ThenType - The type to be used for the {@linkcode $Then} capability.
 * @template ElseType - The type to be used for the {@linkcode $Else} capability.
 */
export type $ConditionOf<
  ThenType extends unknown = unknown,
  ElseType extends unknown = unknown,
> = $Then<ThenType> & $Else<ElseType>;

/**
 * A special capability setting utility that defines the types for the {@linkcode $Then} and {@linkcode $Else}
 * capabilities as `true` and `false`, respectively.
 */
export type $AsCondition = $ConditionOf<true, false>;
