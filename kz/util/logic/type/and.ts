// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { DefaultOf, UseDefault } from '@kz/util/capability';

import type { If } from './if.ts';
import type { LogicCapabilities, LogicDefaultSettings } from './types.ts';

type Capabilities = LogicCapabilities;
type DefaultSettings = LogicDefaultSettings;

/**
 * Performs a logical AND operation on two boolean operands, returning a type that represents the result of the operation.
 *
 * # Resulting operand
 * The resulting operand is determined by the provided boolean operands and the {@linkcode UseInversion} capability setting. If the {@linkcode UseInversion} capability is set to {@linkcode AsInverted}, the resulting operand is the opposite of the provided boolean operands. Otherwise, the resulting operand is the same as the provided boolean operands.
 * # Logic matrix
 * | OperandA | OperandB | Result |
 * |----------|----------|--------|
 * | `true`   | `true`   | `true` |
 * | `true`   | `false`  | `false`|
 * | `false`  | `true`   | `false`|
 * | `false`  | `false`  | `false`|
 * > [!NOTE]
 * > The {@linkcode UseInversion} capability can be used to flip the result of the AND operation, resulting in `false` if the resulting operand is `true`, and `true` otherwise.
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
export type And<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends Capabilities = DefaultSettings,
> = If<
  Result<OperandA, OperandB>,
  ApplyDefault<Settings>
>;

type Result<OperandA extends boolean, OperandB extends boolean> =
  OperandA extends true ? OperandB extends true ? true : false : false;

type ApplyDefault<Settings extends Capabilities> = Settings extends UseDefault
  ? Settings
  : Settings & DefaultOf<true>;
