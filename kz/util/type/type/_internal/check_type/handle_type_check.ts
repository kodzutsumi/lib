import type { IsAny } from '../is_any.ts';
import type { IsSpecial } from '../is_special.ts';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { CheckOrdinary } from './check_ordinary.ts';
import type { CheckAny } from './check_any.ts';
import type { CheckSpecial } from './check_special.ts';

/**
 * Handles the core logic of the type check, including special handling for `any`, `never`, `void`, and `unknown` types, as well as applying the specified capabilities for strictness and distribution.
 *
 * The logic is as follows:
 * - If `TargetType` is `any`, the result depends on whether `Type` is also `any` and the presence of the `AsLoose` capability.
 * - If `TargetType` is a special type, it checks if `Type` is also a special type and applies a standard check if they are not the same.
 * - For regular types, it applies either a strict or loose check based on the capabilities specified in `Settings`.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false`.
 * @internal
 */
export type HandleTypeCheck<
  TargetType,
  Type,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = IsAny<TargetType> extends true ? CheckAny<TargetType, Type, Settings>
  : IsSpecial<TargetType> extends true
    ? CheckSpecial<TargetType, Type, Settings>
  : CheckOrdinary<TargetType, Type, Settings>;
