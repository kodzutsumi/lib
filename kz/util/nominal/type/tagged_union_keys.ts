// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ConditionOf } from '@kz/util/capability';

import type { Extends } from '@kz/util/type';

import type { TaggedLike, TaggedUnionKeyType } from './_internal/mod.ts';

/**
 * Retrieves the keys of a tagged union type that are used for discriminating between the different variants of the union.
 *
 * @template Type - The tagged union type from which to extract the keys.
 * @template Name - The property key that is used as the discriminator in the tagged union, defaulting to a specific symbol type.
 * @returns A union of the keys that are used for discriminating between the variants of the tagged union.
 */
export type TaggedUnionKeys<
  Type extends TaggedLike<Type>,
  Name extends PropertyKey = typeof TaggedUnionKeyType,
> = {
  [Key in Name]: Extends<Key, Name, ConditionOf<Type[Key], never>>;
}[Name];
