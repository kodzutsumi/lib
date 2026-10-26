// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Checks if a type is `any`.
 *
 * @template Type - The type to check.
 * @returns `true` if the type is `any`, otherwise `false`.
 * @internal
 */
export type _IsAny<Type> = 0 extends 1 & NoInfer<Type> ? true : false;
