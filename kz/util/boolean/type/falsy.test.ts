// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Falsy } from '@kz/util/boolean';

describe('Falsy', () => {
  describe('type', () => {
    it('should be a union of falsy values', () => {
      type Actual = Falsy;
      type Expected =
        | false
        | 0
        | -0
        | 0n
        | ''
        | null
        | undefined;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('validation', () => {
    it('should be true for falsy values', () => {
      assertType<Has<Falsy, false>>(true);
      assertType<Has<Falsy, 0>>(true);
      assertType<Has<Falsy, -0>>(true);
      assertType<Has<Falsy, 0n>>(true);
      assertType<Has<Falsy, ''>>(true);
      assertType<Has<Falsy, null>>(true);
      assertType<Has<Falsy, undefined>>(true);
    });
  });
});
