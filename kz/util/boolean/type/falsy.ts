// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Nil } from '@kz/util/type';

/**
 * Represents all falsy values in JavaScript.
 *
 * Falsy values include:
 * - `null`
 * - `undefined`
 * - `false`
 * - `NaN`
 * - `0`
 * - `-0`
 * - `0n` (BigInt zero)
 * - `''` (empty string)
 *
 * This type is useful for type-level programming when you want to check if a value is falsy or to create utility types that depend on falsy values.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export type Falsy = Nil | false | 0 | -0 | 0n | '';
