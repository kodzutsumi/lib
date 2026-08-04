import type { $AsReversed, $AsUnified } from '@kz/util/capability';

import type { _IsSpecial } from './_is_special.ts';
import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { _CheckOrdinary } from './_check_ordinary.ts';
import type { _IsAny } from './_is_any.ts';

/**
 * Compares "special" types against each other based on provided settings.
 *
 * If `Type` is not a special type, the types are referred to `_CheckOrdinary` for further checking.
 * Performing ordinary comparisons on an ordinary and special type return unexpected results, so providing
 * necessary settings is important to ensure the effective use of the check.
 *
 * ## Capabilities
 * | Capability | Required? | Description |
 * |------------|-----------|-------------|
 * | {@linkcode $UseReversed} | No | Determines whether to reverse the check. |
 * | {@linkcode $UseUnified} | No | Determines whether to use a unified comparison strategy. |
 *
 * ### Defaults
 * | Capability | Default | Inferred? |
 * |------------|---------|-----------|
 * | {@linkcode $UseReversed} | {@linkcode $AsForward} | Yes |
 * | {@linkcode $UseUnified} | {@linkcode $AsDistributed} | Yes |
 *
 * > [!NOTE]
 * > ***Inferred?*** indicates whether the setting is inferred as the default if no setting is present.
 *
 * ### Behavior matrix
 * If `Type` is not a "special" type, it is referred to `_CheckOrdinary` for further checking.
 *
 * | {@linkcode $UseReversed} | {@linkcode $UseUnified} | Result |
 * |-------------------------|-----------------------|--------|
 * | {@linkcode $AsForward} | {@linkcode $AsDistributed} | Performs a distributed check that `Type` extends `TargetType`. |
 * | {@linkcode $AsForward} | {@linkcode $AsUnified} | Performs a unified check that `Type` extends `TargetType`. |
 * | {@linkcode $AsReversed} | {@linkcode $AsDistributed} | Performs a distributed check that `TargetType` extends `Type`. |
 * | {@linkcode $AsReversed} | {@linkcode $AsUnified} | Performs a unified check that `TargetType` extends `Type`. |
 *
 * > [!NOTE]
 * > Unified checks on "special" types are not `[Type] extends [TargetType]` or `[TargetType] extends [Type]`, but
 * > rather `[Type, TargetType] extends [TargetType, Type]`, making the {@linkcode $UseReversed} setting irrelevant for
 * > unified checks.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false`.
 * @internal
 */
export type _CheckSpecial<
  TargetType,
  Type,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = _IsAny<TargetType> extends true ? Settings extends $AsUnified ? _IsAny<Type>
  : true
  : _IsSpecial<Type> extends true
    ? Settings extends $AsUnified
      ? [Type, TargetType] extends [TargetType, Type] ? true
      : false
    : Settings extends $AsReversed
      ? (TargetType extends Type ? true : false) extends true ? true
      : false
    : (Type extends TargetType ? true : false) extends true ? true
    : false
  : _CheckOrdinary<TargetType, Type, Settings>;
