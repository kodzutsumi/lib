// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsFilter,
  DefaultOf,
  Else,
  ResolveBoolean,
  Then,
  UseDefault,
  UseStream,
} from '@kz/util/capability';

import type { LogicCapabilities, LogicDefaultSettings } from './types.ts';

type Capabilities = LogicCapabilities;
type DefaultSettings = LogicDefaultSettings;

/**
 * Performs a conditional type evaluation based on a boolean operand, returning a type that represents the result of the evaluation.
 *
 * # Resulting operand
 * The resulting operand is determined by the provided boolean operand and the {@linkcode UseInversion} capability setting. If the {@linkcode UseInversion} capability is set to {@linkcode AsInverted}, the resulting operand is the opposite of the provided boolean operand. Otherwise, the resulting operand is the same as the provided boolean operand.
 * > [!NOTE]
 * > The {@linkcode UseInversion} capability can be used to flip the result of the NOT operation, resulting in `false` if the resulting operand is `true`, and `true` otherwise.
 * # Capabilities
 * - {@link UseCondition}
 * - {@link UseInversion}
 * - {@link UseStream}
 * - {@link UseDefault}
 * ## Defaults
 * | Capability | Default Setting |
 * |------------|-----------------|
 * | {@link UseCondition} | {@link AsCondition} |
 * | {@link UseInversion} | {@linkcode AsInitial} (implied) |
 * | {@link UseStream} | None |
 * | {@link UseDefault} | None |
 * ## Behavior
 * ### Default
 * Return `true` if the resulting operand is `true`, and `false` otherwise.
 * #### Settings
 * | Activates  | Option | Default | Description |
 * |------------|--------|---------|-------------|
 * | | {@linkcode UseCondition} | {@linkcode AsCondition} | Determines the type that is returned based on the resulting operand. |
 * #### Behavior matrix
 * | {@linkcode UseCondition} | Result Type |
 * |-----------------------|-------------|
 * | {@linkcode AsCondition} (default) | The resulting type is `true` if the resulting operand is `true`, and `false` otherwise. |
 * | [Then<ThenType>]{@linkcode Then} | The resulting type is `ThenType` if the resulting operand is `true`, and `false` otherwise. |
 * | [Else<ElseType>]{@linkcode Else} | The resulting type is `ElseType` if the resulting operand is `false`, and `true` otherwise. |
 * | [ConditionOf<ThenType, ElseType>]{@linkcode ConditionOf} | The resulting type is `ThenType` if the resulting operand is `true`, and `ElseType` if the resulting operand is `false`. |
 * The {@linkcode UseInversion} capability can be used to flip the behavior of the condition, returning `false` if the resulting operand is `true`, and `true` otherwise.
 * ### Streaming
 * Streaming provides two distinct behaviors that can be activated with the {@linkcode UseStream} capability, which can be used in conjunction with the {@linkcode UseCondition} capability to determine the resulting type based on the resulting operand.
 * - {@linkcode AsFilter}: The resulting type is `unknown`, or {@linkcode DefaultOf} type if the resulting operand is `true`, and `never` otherwise.
 * - {@linkcode AsPredicate}: The resulting type is `true` if the resulting operand is `true`, and `false` otherwise.
 * #### Settings
 * | Activates  | Option | Default | Description |
 * |------------|--------|---------|-------------|
 * | X | {@linkcode UseStream} | None | Determines the streaming behavior that is performed. |
 * #### Behavior matrix
 * | {@linkcode UseStream} | {@linkcode DefaultOf} | Result Type |
 * |-----------------------|-------------|------------|
 * | {@linkcode AsPredicate} | None | The resulting type is `true` if the resulting operand is `true`, and `false` otherwise. |
 * | {@linkcode AsStream} | None | The resulting type is `unknown` if the resulting operand is `true`, and `never` otherwise. |
 * | {@linkcode AsStream} | [DefaultOf<DefaultType>]{@linkcode DefaultOf} | The resulting type is `DefaultType` if the resulting operand is `true`, and `never` otherwise. |
 *
 * @template Operand - The boolean operand that determines the condition evaluation.
 * @template Settings - The capability settings that determine how the condition is evaluated.
 * @returns The resulting type of the condition evaluation based on the provided operand and capability settings.
 */
export type If<
  Operand extends boolean,
  Settings extends Capabilities = DefaultSettings,
> = InnerIf<ResolveBoolean<Operand, Settings>, ApplyDefault<Settings>>;

type InnerIf<
  Operand extends boolean,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends UseStream ? HandleFilter<Operand, Settings>
  : HandleCondition<Operand, Settings>;

type HandleCondition<Operand extends boolean, Settings> = Operand extends true
  ? Settings extends Then<infer TrueType> ? TrueType : true
  : Settings extends Else<infer FalseType> ? FalseType
  : false;

type HandleFilter<
  Operand extends boolean,
  Settings extends UseStream,
> = Settings extends AsFilter
  ? Settings extends DefaultOf<infer DefaultType>
    ? Operand extends true ? DefaultType : never
  : Operand extends true ? unknown
  : never
  : Operand extends true ? true
  : false;

type ApplyDefault<Settings extends Capabilities> = Settings extends UseDefault
  ? Settings
  : Settings & DefaultOf<true>;
