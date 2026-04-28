// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  AsFilter,
  AsInverted,
  DefaultOf,
  Else,
  Then,
} from '@kz/util/capability';
import type { If } from '@kz/util/logic';

describe('Logic - If', () => {
  describe('with defaults', () => {
    it('should return true', () => {
      type Actual = If<true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type Actual = If<false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Then option', () => {
    it('should return the Then type', () => {
      type Actual = If<true, Then<string>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Else option', () => {
    it('should return the Else type', () => {
      type Actual = If<false, Else<number>>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with both Then and Else options', () => {
    it('should return the Then type', () => {
      type Actual = If<true, Then<string> & Else<number>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the Else type', () => {
      type Actual = If<false, Then<string> & Else<number>>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsFilter', () => {
    describe('Defaults', () => {
      it('should return true', () => {
        type Actual = If<true, AsFilter>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return never', () => {
        type Actual = If<false, AsFilter & DefaultOf<string>>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('custom DefaultOf', () => {
      it('should return the DefaultOf type', () => {
        type Actual = If<true, AsFilter & DefaultOf<string>>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return never', () => {
        type Actual = If<false, AsFilter & DefaultOf<string>>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('with AsInverted', () => {
    describe('with defaults', () => {
      it('should return false', () => {
        type Actual = If<true, AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true', () => {
        type Actual = If<false, AsInverted>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Then option', () => {
      it('should return false', () => {
        type Actual = If<true, Then<string> & AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Else option', () => {
      it('should return true', () => {
        type Actual = If<false, Else<number> & AsInverted>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with both Then and Else options', () => {
      it('should return the Else type', () => {
        type Actual = If<true, Then<string> & Else<number> & AsInverted>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return the Then type', () => {
        type Actual = If<false, Then<string> & Else<number> & AsInverted>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsFilter', () => {
      describe('Defaults', () => {
        it('should return never', () => {
          type Actual = If<true, AsFilter & AsInverted>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the DefaultOf type', () => {
          type Actual = If<false, AsFilter & DefaultOf<string> & AsInverted>;
          type Expected = string;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('custom DefaultOf', () => {
        it('should return never', () => {
          type Actual = If<true, AsFilter & DefaultOf<string> & AsInverted>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the DefaultOf type', () => {
          type Actual = If<false, AsFilter & DefaultOf<string> & AsInverted>;
          type Expected = string;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
