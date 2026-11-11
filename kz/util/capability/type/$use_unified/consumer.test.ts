// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsDistributed,
  $AsUnified,
  $UseUnified,
  $UseUnifiedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnified - consumer', () => {
  describe('$UseUnified', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseUnified<string>;
    });

    it('should be keyed by the $UseUnifiedKeyString', () => {
      type Expected = typeof $UseUnifiedKeyString;
      type Actual = keyof $UseUnified;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseUnifiedKeyString]: boolean;
      };
      type Actual = $UseUnified;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsDistributed (default implied) with the false variant', () => {
      type Expected = $AsDistributed;
      type Actual = $UseUnified<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsUnified with the true variant', () => {
      type Expected = $AsUnified;
      type Actual = $UseUnified<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
