// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $DefaultOf, $UseDefault } from '@kz/util/capability';

/**
 * Applies the default type to the settings if `$UseDefault` is not present.
 *
 * - If `$UseDefault` is included in `Settings`, it returns `Settings` as is, without adding the default type.
 * - If `$UseDefault` is not included, it adds the default type to the `Settings`, ensuring that a default type is applied.
 *
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @template DefaultType - The type to use as the default if `$UseDefault` is not present.
 * @returns The modified settings with the default type applied if `$UseDefault` is not present, or the original settings if it is present.
 */
export type ApplyDefault<Settings, DefaultType> =
  Settings extends $UseDefault ? Settings
    : Settings & $DefaultOf<DefaultType>;
