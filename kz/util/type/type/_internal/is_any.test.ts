// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { IsAny } from './is_any.ts';

describe('IsAny', () => {
  it('should return true for any type', () => {
    type Actual = IsAny<any>;
    type Expected = true;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for string types', () => {
    type Actual = IsAny<string>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for number types', () => {
    type Actual = IsAny<number>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for boolean types', () => {
    type Actual = IsAny<boolean>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for unknown types', () => {
    type Actual = IsAny<unknown>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return false for never types', () => {
    type Actual = IsAny<never>;
    type Expected = false;

    assertType<IsExact<Actual, Expected>>(true);
  });
});
