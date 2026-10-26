// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { BannedTypes } from '../banned_types.ts';

/**
 * Represents a type that permits the use of a banned type with a specified reason.
 *
 * @template Type - The banned type that is being permitted.
 * @template Reason - A string describing the reason for permitting the banned type.
 * @internal
 */
export type BannedTypePermitter<
  Type extends keyof BannedTypes,
  Reason extends string,
> = Reason extends string ? Reason extends '' ? never
  : BannedTypes[Type]
  : never;
