// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Branded } from './_internal/mod.ts';

/**
 * Creates a branded version of a given type, associating it with a unique brand name.
 *
 * In order to assign an unbranded value as a branded type, you must cast it.
 *
 * @template Type - The underlying type that is being branded.
 * @template Name - A unique identifier for the brand, typically a string literal type.
 * @returns A new type that combines the original type with the brand, allowing for nominal typing.
 */
export type Brand<Type, Name extends PropertyKey> = Type & Branded<Name>;
