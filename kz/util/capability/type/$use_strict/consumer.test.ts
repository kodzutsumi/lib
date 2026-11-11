// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsLoose,
  $AsStrict,
  $UseStrict,
  $UseStrictKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStrict - consumer', () => {
  describe('$UseStrict', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseStrict<string>;
    });

    it('should be keyed by the $UseStrictKeyString', () => {
      type Expected = typeof $UseStrictKeyString;
      type Actual = keyof $UseStrict;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseStrictKeyString]: boolean;
      };
      type Actual = $UseStrict;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsLoose (default implied) with the false variant', () => {
      type Expected = $AsLoose;
      type Actual = $UseStrict<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsStrict with the true variant', () => {
      type Expected = $AsStrict;
      type Actual = $UseStrict<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
