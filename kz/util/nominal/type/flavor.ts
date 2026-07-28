// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Flavored } from './_internal/mod.ts';

/**
 * Creates a flavored version of a given type, associating it with a unique flavor name.
 *
 * This is a less strict version of a {@linkcode Brand}, allowing for more flexible type compatibility while still providing nominal typing benefits.
 *
 * @template Type - The underlying type that is being flavored.
 * @template Name - A unique identifier for the flavor, typically a string literal type.
 * @returns A new type that combines the original type with the flavor, allowing for nominal typing with more flexibility than a brand.
 */
export type Flavor<Type, Name extends PropertyKey> = Type & Flavored<Name>;
