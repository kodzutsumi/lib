// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $AsCondition, $UseCondition } from '@kz/util/capability';
import type { Extends } from '@kz/util/type';

import type { Falsy } from './falsy.ts';

type FalsyOptions = $UseCondition;
type FalsyDefaults = $AsCondition;

/**
 * Checks if `Type` is a {@linkcode Falsy} value.
 *
 * @template Type - The type to check.
 * @template Options - The options to customize the behavior.
 */
export type IsFalsy<
  Type,
  Options extends FalsyOptions = FalsyDefaults,
> = Extends<Type, Falsy, Options>;
