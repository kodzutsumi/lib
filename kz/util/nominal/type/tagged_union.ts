// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  Merge,
  TaggedSymbolType,
  TaggedUnionKeyType,
} from './_internal/mod.ts';

/**
 * Creates a tagged union type from a given record type, where each property of the record represents a variant of the union. Each variant is tagged with a specific key and value to allow for discriminating between the different variants of the union.
 *
 * @template Type - The record type from which to create the tagged union, where each property represents a variant of the union.
 * @template Name - The property key that is used as the discriminator in the tagged union, defaulting to a specific symbol type.
 * @returns A new tagged union type that combines all the variants of the original record type, with each variant tagged for discrimination.
 */
export type TaggedUnion<
  Type extends Record<PropertyKey, unknown>,
  Name extends PropertyKey = typeof TaggedUnionKeyType,
> =
  & {
    [Key in keyof Type]: Merge<Record<Name, Key> & Type[Key]>;
  }[keyof Type]
  & { [TaggedSymbolType]: Name };
