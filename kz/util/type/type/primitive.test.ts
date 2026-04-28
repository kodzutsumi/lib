// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has } from '@std/testing/types';
import type { Primitive } from '@kz/util/type';

describe('Primitive', () => {
  it('should contain string', () => {
    assertType<Has<Primitive, string>>(true);
  });
  
  it('should contain number', () => {
    assertType<Has<Primitive, number>>(true);
  });
  
  it('should contain boolean', () => {
    assertType<Has<Primitive, boolean>>(true);
  });
  
  it('should contain bigint', () => {
    assertType<Has<Primitive, bigint>>(true);
  });
  
  it('should contain symbol', () => {
    assertType<Has<Primitive, symbol>>(true);
  });
  
  it('should contain null', () => {
    assertType<Has<Primitive, null>>(true);
  });
  
  it('should contain undefined', () => {
    assertType<Has<Primitive, undefined>>(true);
  });
});
