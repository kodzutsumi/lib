// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Widen } from '@kz/util/type';

import type { TaggedType } from './_internal/mod.ts';

/**
 * Creates a tagged version of a given type, associating it with a unique tag name and optional metadata. This allows for nominal typing by distinguishing the tagged type from its underlying type, even if they have the same structure.
 *
 * Functionally similar to a {@linkcode Brand}, but with the added capability of including metadata that can be extracted, providing more flexibility in how the tagged type can be utilized while still maintaining nominal typing benefits.
 *
 * @template Type - The underlying type that is being tagged.
 * @template Name - A unique identifier for the tag, typically a string literal type.
 * @template Meta - Optional metadata associated with the tag, defaulting to `unknown`.
 * @returns A new type that combines the original type with the tag and metadata, allowing for nominal typing with additional context.
 */
export type Tagged<Type, Name extends PropertyKey, Meta = unknown> =
  Type extends TaggedType<infer IName, infer IType>
    ? Widen<Type> & (TaggedType<Name, Meta> & TaggedType<IName, IType>)
    : Type & TaggedType<Name, Meta>;
