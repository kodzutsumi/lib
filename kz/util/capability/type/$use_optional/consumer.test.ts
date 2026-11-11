// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsOptional,
  $AsRequired,
  $UseOptional,
  $UseOptionalKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOptional - consumer', () => {
  describe('$UseOptional', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseOptional<string>;
    });

    it('should be keyed by the $UseOptionalKeyString', () => {
      type Expected = typeof $UseOptionalKeyString;
      type Actual = keyof $UseOptional;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseOptionalKeyString]: boolean;
      };
      type Actual = $UseOptional;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsRequired (default implied) with the false variant', () => {
      type Expected = $AsRequired;
      type Actual = $UseOptional<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsOptional with the true variant', () => {
      type Expected = $AsOptional;
      type Actual = $UseOptional<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
