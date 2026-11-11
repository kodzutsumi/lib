// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has } from '@std/testing/types';
import type { Scalar } from '@kz/util/type';

describe('Scalar', () => {
  it('should contain string', () => {
    assertType<Has<Scalar, string>>(true);
  });

  it('should contain number', () => {
    assertType<Has<Scalar, number>>(true);
  });

  it('should contain boolean', () => {
    assertType<Has<Scalar, boolean>>(true);
  });

  it('should contain bigint', () => {
    assertType<Has<Scalar, bigint>>(true);
  });

  it('should contain symbol', () => {
    assertType<Has<Scalar, symbol>>(true);
  });
});
