// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseUnsafeKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for unsafe or safe behavior.
 *
 * Use this capability consumer to indicate that a type supports both unsafe or
 * safe behavior, or results in an unsafe or safe type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsUnsafe} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsSafe} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsUnsafe - The boolean setting for this capability consumer.
 */
export type $UseUnsafe<AsUnsafe extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseUnsafe` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseUnsafeKeyString]: AsUnsafe;
};
