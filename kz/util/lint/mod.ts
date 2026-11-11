// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * > [!NOTE]
 * > This is a types-only sub-module.
 *
 * Use types that are banned by the linter.
 *
 * These types are similar to the lint ignore directives, as they require a
 * reason for the explicit usage of the banned type.
 *
 * @example Permit the `any` type
 * ```ts
 * import { assertType, type IsExact } from '@std/testing/types';
 *
 * import type { Permit } from '@kz/util/lint';
 *
 * type Any = Permit<'any', '#i11n:testing'>;
 *
 * assertType<IsExact<Any, any>>(true);
 * ```
 *
 * @example `Reason` is required
 * ```ts
 * import { assertType, type IsExact } from '@std/testing/types';
 *
 * import type { Permit } from '@kz/util/lint';
 *
 * type Any = Permit<'any', ''>;
 *
 * assertType<IsExact<Any, never>>(true);
 * ```
 *
 * @module
 */

export * from './type/mod.ts';
