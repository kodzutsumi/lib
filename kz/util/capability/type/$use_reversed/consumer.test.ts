// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsForward,
  $AsReversed,
  $UseReversed,
  $UseReversedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseReversed - consumer', () => {
  describe('$UseReversed', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseReversed<string>;
    });

    it('should be keyed by the $UseReversedKeyString', () => {
      type Expected = typeof $UseReversedKeyString;
      type Actual = keyof $UseReversed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseReversedKeyString]: boolean;
      };
      type Actual = $UseReversed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsForward (default implied) with the false variant', () => {
      type Expected = $AsForward;
      type Actual = $UseReversed<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsReversed with the true variant', () => {
      type Expected = $AsReversed;
      type Actual = $UseReversed<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
