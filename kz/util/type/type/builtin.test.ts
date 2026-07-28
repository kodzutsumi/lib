// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has } from '@std/testing/types';
import type { Builtin, Primitive } from '@kz/util/type';
import type { Permit } from '@kz/util/lint';

type TestFunction = Permit<'Function', '#i11n:testing'>;
type ToStringTagObject = {
  readonly [Symbol.toStringTag]: string;
};

describe('Builtin', () => {
  it('should contain Function', () => {
    assertType<Has<Builtin, TestFunction>>(true);
  });

  it('should contain RegExp', () => {
    assertType<Has<Builtin, RegExp>>(true);
  });

  it('should contain primitives', () => {
    assertType<Has<Builtin, Primitive>>(true);
  });

  it('should contain Date', () => {
    assertType<Has<Builtin, Date>>(true);
  });

  it('should contain Error', () => {
    assertType<Has<Builtin, Error>>(true);
  });

  it('should contain Generator', () => {
    assertType<Has<Builtin, Generator>>(true);
  });

  it('should contain a toStringTag symbol', () => {
    assertType<Has<Builtin, ToStringTagObject>>(true);
  });
});
