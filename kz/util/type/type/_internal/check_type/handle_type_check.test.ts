// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Any } from '../../any.ts';
import type { Nil } from '../../nil.ts';

import type { HandleTypeCheck } from './handle_type_check.ts';

type AnyType = Any<'i11n#testing'>;

/**
 * This test is focused mainly on the routing logic of `HandleTypeCheck`, ensuring that it correctly identifies when to apply `CheckAny`, `CheckSpecial`, or `CheckOrdinary` based on the nature of the `TargetType` and the specified capabilities.
 */
describe('HandleTypeCheck', () => {
  describe('any', () => {
    type TypeToCheck = AnyType;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return true for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('unknown', () => {
    type TypeToCheck = unknown;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('never', () => {
    type TypeToCheck = never;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('void', () => {
    type TypeToCheck = void;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('string', () => {
    type TypeToCheck = string;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('Nil', () => {
    type TypeToCheck = Nil;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('Object', () => {
    type TypeToCheck = {
      a: number;
      b: string;
      c: boolean;
    };

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
