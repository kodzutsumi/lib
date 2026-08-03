import type { $AsUnsafe } from '@kz/util/capability';

import type { StandardCapabilities } from './types.ts';

/**
 * Applies the safety settings to the result of the type check.
 *
 * - If `$AsUnsafe` is included in `Settings`, it casts any `true` result to `true`, effectively treating any non-`false` result as `true`.
 * - If `AsSafe` is included (or if `$AsUnsafe` is not included), it retains the actual `boolean` result of the check.
 *
 * @template Result - The result of the type check before applying safety settings.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns The final result after applying safety settings, which may be the original boolean result or a casted value based on the presence of `$AsUnsafe`.
 * @internal
 */
export type _ApplySafety<
  Result extends boolean,
  Settings extends StandardCapabilities,
> = Settings extends $AsUnsafe ? [Result] extends [true] ? true
  : [Result] extends [false] ? false
  : true
  : Result;
