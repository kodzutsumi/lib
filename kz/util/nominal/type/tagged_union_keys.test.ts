// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { TaggedUnion, TaggedUnionKeys } from '@kz/util/nominal';

describe('TaggedUnionKeys', () => {
  it('should extract tagged union keys', () => {
    type Style = TaggedUnion<{
      outline: { color: string; borderWidth: number };
      filled: { color: string; backgroundColor: string };
      link: { color: string; underline: boolean };
    }>;

    assertType<IsExact<TaggedUnionKeys<Style>, 'outline' | 'filled' | 'link'>>(
      true,
    );
  });

  it('should extract tagged union keys with custom tag', () => {
    type Style = TaggedUnion<{
      outline: { color: string; borderWidth: number };
      filled: { color: string; backgroundColor: string };
      link: { color: string; underline: boolean };
    }, 'style'>;
    type StyleKeys = TaggedUnionKeys<Style, 'style'>;

    assertType<IsExact<StyleKeys, 'outline' | 'filled' | 'link'>>(true);
  });
});
