// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A scalar is a primitive value that is not an object or a function. It includes:
 * - `string`
 * - `number`
 * - `bigint`
 * - `boolean`
 * - `symbol`
 */
export type Scalar = PropertyKey | bigint | boolean;
