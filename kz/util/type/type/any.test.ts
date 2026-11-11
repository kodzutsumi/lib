// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:testing'>;
type BadAnyType = Any<''>;

describe('Any', () => {
  it('should be assignable to any type with a documented reason', () => {
    assertType<IsExact<AnyType, any>>(true);
  });

  it('should not be assignable to any type without a documented reason', () => {
    assertType<IsExact<BadAnyType, never>>(true);
  });
});
