// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type {
  ExtractTaggedMetadata,
  Tagged,
  TaggedUnion,
} from '@kz/util/nominal';

describe('ExtractTaggedMetadata', () => {
  it('should extract metadata from a tagged type', () => {
    type JsonOf<T> = Tagged<string, 'Json', T>;
    type UserString = JsonOf<{ name: string; age: number }>;
    type UserJson = ExtractTaggedMetadata<UserString, 'Json'>;

    assertType<IsExact<UserJson, { name: string; age: number }>>(true);
  });

  it('should extract metadata from a tagged union type', () => {
    type Style = TaggedUnion<{
      outline: { color: string; borderWidth: number };
      filled: { color: string; backgroundColor: string };
      link: { color: string; underline: boolean };
    }>;

    type LinkStyle = ExtractTaggedMetadata<Style, 'link'>;
    type OutlineStyle = ExtractTaggedMetadata<Style, 'outline'>;

    assertType<Has<LinkStyle, { color: string; underline: boolean }>>(true);
    assertType<Has<OutlineStyle, { color: string; borderWidth: number }>>(true);
  });
});
