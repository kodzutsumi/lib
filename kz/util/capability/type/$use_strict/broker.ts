// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseStrict } from './consumer.ts';

/**
 * The strict behavior broker of the {@linkcode $UseStrict} capability.
 *
 * Use this setting to invoke the strict behavior of a type that supports the
 * {@linkcode $UseStrict} capability consumer.
 *
 * @see {@linkcode $AsLoose} for the loose (default implied) behavior broker of this capability.
 */
export type $AsStrict = $UseStrict<true>;

/**
 * The loose behavior broker of the {@linkcode $UseStrict} capability.
 *
 * Use this setting to invoke the loose behavior of a type that supports the
 * {@linkcode $UseStrict} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseStrict} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsStrict} for the strict behavior broker of this capability.
 */
export type $AsLoose = $UseStrict<false>;
