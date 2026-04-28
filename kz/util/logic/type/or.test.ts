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
import type { Or } from '@kz/util/logic';

describe('Logic - Or', () => {
  describe('with defaults', () => {
    it('should return true', () => {
      type Actual = Or<true, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true', () => {
      type Actual = Or<true, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true', () => {
      type Actual = Or<false, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type Actual = Or<false, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Then option', () => {
    it('should return the Then type', () => {
      type Actual = Or<true, true, Then<string>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Else option', () => {
    it('should return the Then type', () => {
      type Actual = Or<true, false, Else<number>>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with both Then and Else options', () => {
    it('should return the Then type', () => {
      type Actual = Or<true, true, Then<string> & Else<number>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the Then type', () => {
      type Actual = Or<true, false, Then<string> & Else<number>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsFilter', () => {
    describe('Defaults', () => {
      it('should return true', () => {
        type Actual = Or<true, false, AsFilter>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return never', () => {
        type Actual = Or<false, false, AsFilter>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('custom DefaultOf', () => {
      it('should return the DefaultOf type', () => {
        type Actual = Or<true, false, AsFilter & DefaultOf<string>>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return never', () => {
        type Actual = Or<false, false, AsFilter & DefaultOf<string>>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('with AsInverted', () => {
    describe('with defaults', () => {
      it('should return false', () => {
        type Actual = Or<true, true, AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false', () => {
        type Actual = Or<true, false, AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false', () => {
        type Actual = Or<false, true, AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true', () => {
        type Actual = Or<false, false, AsInverted>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Then option', () => {
      it('should return false', () => {
        type Actual = Or<true, true, Then<string> & AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Else option', () => {
      it('should return the Else type', () => {
        type Actual = Or<true, false, Else<number> & AsInverted>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with both Then and Else options', () => {
      it('should return the Else type', () => {
        type Actual = Or<true, true, Then<string> & Else<number> & AsInverted>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return the Else type', () => {
        type Actual = Or<true, false, Then<string> & Else<number> & AsInverted>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsFilter', () => {
      describe('Defaults', () => {
        it('should return never', () => {
          type Actual = Or<true, false, AsFilter & AsInverted>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true', () => {
          type Actual = Or<false, false, AsFilter & AsInverted>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('custom DefaultOf', () => {
        it('should return never', () => {
          type Actual = Or<
            true,
            false,
            AsFilter & DefaultOf<string> & AsInverted
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the DefaultOf type', () => {
          type Actual = Or<
            false,
            false,
            AsFilter & DefaultOf<string> & AsInverted
          >;
          type Expected = string;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
