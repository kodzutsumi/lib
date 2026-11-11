// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseReversed } from './consumer.ts';

/**
 * The reversed behavior broker of the {@linkcode $UseReversed} capability.
 *
 * Use this setting to invoke the reversed behavior of a type that supports the
 * {@linkcode $UseReversed} capability consumer.
 *
 * @see {@linkcode $AsForward} for the forward (default implied) behavior broker of this capability.
 */
export type $AsReversed = $UseReversed<true>;

/**
 * The forward behavior broker of the {@linkcode $UseReversed} capability.
 *
 * Use this setting to invoke the forward behavior of a type that supports the
 * {@linkcode $UseReversed} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseReversed} capability when the setting is not explicitly set
 * > to `true` or `false`.
 *
 * @see {@linkcode $AsReversed} for the reversed behavior broker of this capability.
 */
export type $AsForward = $UseReversed<false>;
