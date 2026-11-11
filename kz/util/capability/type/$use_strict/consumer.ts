// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $UseStrictKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for strict or loose behavior.
 *
 * Use this capability consumer to indicate that a type supports both strict or
 * loose behavior, or results in a strict or loose type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsStrict} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsLoose} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsStrict - The boolean setting for this capability consumer.
 */
export type $UseStrict<AsStrict extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseStrict` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseStrictKeyString]: AsStrict;
};
