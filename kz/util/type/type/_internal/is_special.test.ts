// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { IsSpecial } from './is_special.ts';

describe('IsSpecial', () => {
  it('should return false for any type', () => {
    type Actual = IsSpecial<any>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for string types', () => {
    type Actual = IsSpecial<string>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for number types', () => {
    type Actual = IsSpecial<number>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for boolean types', () => {
    type Actual = IsSpecial<boolean>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return true for unknown types', () => {
    type Actual = IsSpecial<unknown>;
    type Expected = true;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return true for never types', () => {
    type Actual = IsSpecial<never>;
    type Expected = true;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return true for void types', () => {
    type Actual = IsSpecial<void>;
    type Expected = true;

    assertType<IsExact<Actual, Expected>>(true);
  });
});
