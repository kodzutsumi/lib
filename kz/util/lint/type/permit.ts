// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { BannedTypePermitter } from './_internal/mod.ts';
import type { BannedTypes } from './banned_types.ts';

/**
 * A type that represents a permit for a banned type, allowing it to be used with a specified reason.
 *
 * @template Type - The type of the banned type being permitted.
 * @template Reason - A string that describes the reason for permitting the banned type.
 */
export type Permit<
  Type extends keyof BannedTypes,
  Reason extends string,
> = BannedTypePermitter<Type, Reason>;
