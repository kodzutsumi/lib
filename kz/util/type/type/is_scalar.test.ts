// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

describe('IsScalar', () => {
  it('has no tests yet', () => {
    assertType<IsExact<true, false>>(false);
  });
});
