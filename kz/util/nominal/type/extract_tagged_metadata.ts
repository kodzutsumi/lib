// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  TaggedLike,
  TaggedMetadataExtractor,
  TaggedSymbolType,
  TaggedType,
  TaggedUnionMetadataExtractor,
  UnionKeyOf,
} from './_internal/mod.ts';

/**
 * Extracts the metadata from a tagged type based on the provided name.
 *
 * Generally in creating tagged types, there is no need to extract the metadata, as it is present at creation. However; in some cases, such as tagged types from third-party libraries, or tagged-like types, it may be necessary to extract the metadata for use in type-level programming.
 *
 * @template Type - The type from which to extract the metadata.
 * @template Name - The name of the tag for which to extract the metadata.
 * @returns The extracted metadata associated with the specified tag name, or `never` if the type does not match the expected structures.
 */
export type ExtractTaggedMetadata<
  Type extends
    | TaggedType<Name, unknown>
    | TaggedLike<Type>,
  Name extends PropertyKey,
> = Type extends TaggedType<PropertyKey, unknown>
  ? TaggedMetadataExtractor<Type, Name>
  : Type extends (
    & { [TaggedSymbolType]?: keyof Type }
    & Record<UnionKeyOf<Type>, PropertyKey>
  ) ? TaggedUnionMetadataExtractor<Type, Name>
  : never;
