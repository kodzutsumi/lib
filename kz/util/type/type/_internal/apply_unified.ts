// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AsUnified, CapSet, UseUnified } from '@kz/util/capability';

/**
 * Applies the unified type to the settings if `UseUnified` is not present.
 *
 * - If `UseUnified` is included in `Settings`, it returns `Settings` as is, without adding `AsUnified`.
 * - If `UseUnified` is not included, it adds `AsUnified` to the `Settings`, ensuring that the unified type is applied.
 *
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns The modified settings with `AsUnified` applied if `UseUnified` is not present, or the original settings if it is present.
 */
export type ApplyUnified<Settings extends CapSet> = Settings extends UseUnified
  ? Settings
  : Settings & AsUnified;
