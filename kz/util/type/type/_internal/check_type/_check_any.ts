import type { $AsReversed } from '@kz/util/capability';

import type { IsAny } from '../is_any.ts';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Checks if the provided `Type` is `any`, and returns `true` if it is, or `false` otherwise. If the `AsLoose` capability is specified in the `Settings`, it also checks if the `TargetType` is assignable to the `Type`, returning `true` if it is, or `false` otherwise.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false`.
 * @internal
 */
export type _CheckAny<
  TargetType,
  Type,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = IsAny<Type> extends true ? true
  : Settings extends $AsReversed ? false
  : TargetType extends Type ? true
  : false;
