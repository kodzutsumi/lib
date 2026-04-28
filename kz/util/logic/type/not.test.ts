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
import type { Not } from '@kz/util/logic';

describe('Logic - Not', () => {
  describe('with defaults', () => {
    it('should return false', () => {
      type Actual = Not<true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true', () => {
      type Actual = Not<false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Then option', () => {
    it('should return the Then type', () => {
      type Actual = Not<false, Then<string>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with Else option', () => {
    it('should return the Else type', () => {
      type Actual = Not<true, Else<number>>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('with both Then and Else options', () => {
    it('should return the Else type', () => {
      type Actual = Not<true, Then<string> & Else<number>>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the Then type', () => {
      type Actual = Not<false, Then<string> & Else<number>>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsFilter', () => {
    describe('Defaults', () => {
      it('should return never', () => {
        type Actual = Not<true, AsFilter>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true', () => {
        type Actual = Not<false, AsFilter>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('custom DefaultOf', () => {
      it('should return never', () => {
        type Actual = Not<true, AsFilter & DefaultOf<string>>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return the DefaultOf type', () => {
        type Actual = Not<false, AsFilter & DefaultOf<string>>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('with AsInverted', () => {
    describe('with defaults', () => {
      it('should return true', () => {
        type Actual = Not<true, AsInverted>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false', () => {
        type Actual = Not<false, AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Then option', () => {
      it('should return false', () => {
        type Actual = Not<false, Then<string> & AsInverted>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Else option', () => {
      it('should return true', () => {
        type Actual = Not<true, Else<number> & AsInverted>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with both Then and Else options', () => {
      it('should return the Then type', () => {
        type Actual = Not<true, Then<string> & Else<number> & AsInverted>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return the else type', () => {
        type Actual = Not<false, Then<string> & Else<number> & AsInverted>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsFilter', () => {
      describe('Defaults', () => {
        it('should return true', () => {
          type Actual = Not<true, AsFilter & AsInverted>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never', () => {
          type Actual = Not<false, AsFilter & AsInverted>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('custom DefaultOf', () => {
        it('should return the DefaultOf type', () => {
          type Actual = Not<true, AsFilter & DefaultOf<string> & AsInverted>;
          type Expected = string;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never', () => {
          type Actual = Not<false, AsFilter & DefaultOf<string> & AsInverted>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
