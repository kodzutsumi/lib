import type { $AsReversed, $AsUnified } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Performs the standard type check based on the specified capabilities for strictness and distribution.
 *
 * The logic is as follows:
 * - If `AsDistributed` is included in `Settings`, it checks the relationship between `TargetType` and `Type` in a distributed manner, applying either a strict or loose check based on the presence of `AsLoose`.
 * - If `AsDistributed` is not included, it performs a non-distributive check, again applying either a strict or loose check based on the presence of `AsLoose`.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false`.
 * @internal
 */
export type _CheckOrdinary<
  TargetType,
  Type,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends $AsUnified
  ? Settings extends $AsReversed
    ? ([TargetType] extends [Type] ? true : false) extends true ? true
    : false
  : ([Type] extends [TargetType] ? true : false) extends true ? true
  : false
  : Settings extends $AsReversed
    ? (TargetType extends Type ? true : false) extends true ? true
    : false
  : (Type extends TargetType ? true : false) extends true ? true
  : false;
