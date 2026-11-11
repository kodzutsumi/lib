// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Widen } from '@kz/util/type';
import type {
  ExtractTaggedMetadata,
  TaggedUnion,
  TaggedUnionKeys,
} from '@kz/util/nominal';

// Importing the internal `TaggedUnionKeyType` and `TaggedSymbolType` for testing.
import type { TaggedSymbolType, TaggedUnionKeyType } from './_internal/mod.ts';

describe('TaggedUnion', () => {
  type Style = TaggedUnion<{
    outline: { color: string; borderWidth: number };
    filled: { color: string; backgroundColor: string };
    link: { color: string; underline: boolean };
  }>;

  it('should create a tagged union', () => {
    assertType<
      IsExact<
        Style,
        ({
          [TaggedUnionKeyType]: 'link';
          color: string;
          underline: boolean;
        } | {
          [TaggedUnionKeyType]: 'outline';
          color: string;
          borderWidth: number;
        } | {
          [TaggedUnionKeyType]: 'filled';
          color: string;
          backgroundColor: string;
        }) & { [TaggedSymbolType]: typeof TaggedUnionKeyType }
      >
    >(true);
  });

  it('should extract tagged union keys', () => {
    assertType<
      IsExact<TaggedUnionKeys<Style>, 'outline' | 'filled' | 'link'>
    >(true);
  });

  it('should extract metadata from a tagged union', () => {
    // Hover over `LinkStyle` and `OutlineStyle` to see the extract metadata.
    type LinkStyle = ExtractTaggedMetadata<Style, 'link'>;
    type OutlineStyle = ExtractTaggedMetadata<Style, 'outline'>;

    assertType<
      Has<LinkStyle, {
        color: string;
        underline: boolean;
      }>
    >(true);
    assertType<
      Has<OutlineStyle, {
        color: string;
        borderWidth: number;
      }>
    >(true);
    assertType<
      IsExact<LinkStyle, OutlineStyle>
    >(false);
  });

  it('should widen to the untagged type', () => {
    type StyleWidened = Widen<Style>;

    // The widened type should not be assignable to the original tagged union type.
    // This is because widening removes the tagged union structure.
    assertType<IsExact<StyleWidened, Style>>(false);

    // The widened type should be a union of the constituent types.
    assertType<
      Has<
        StyleWidened,
        | { color: string; borderWidth: number }
        | { color: string; backgroundColor: string }
        | { color: string; underline: boolean }
      >
    >(true);
  });
});
