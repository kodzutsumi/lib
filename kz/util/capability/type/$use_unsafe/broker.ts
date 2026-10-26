// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseUnsafe } from './consumer.ts';

/**
 * The unsafe behavior broker of the {@linkcode $UseUnsafe} capability.
 *
 * Use this setting to invoke the unsafe behavior of a type that supports the
 * {@linkcode $UseUnsafe} capability consumer.
 *
 * @see {@linkcode $AsSafe} for the safe (default implied) behavior broker of this capability.
 */
export type $AsUnsafe = $UseUnsafe<true>;

/**
 * The safe behavior broker of the {@linkcode $UseUnsafe} capability.
 *
 * Use this setting to invoke the safe behavior of a type that supports the
 * {@linkcode $UseUnsafe} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseUnsafe} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsUnsafe} for the unsafe behavior broker of this capability.
 */
export type $AsSafe = $UseUnsafe<false>;
