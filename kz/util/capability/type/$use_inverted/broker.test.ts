// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsInitial,
  $AsInverted,
  $UseInverted,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseInverted - broker', () => {
  describe('$AsInitial (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseInverted<false>;
      type Actual = $AsInitial;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseInverted', () => {
      type Expected = $UseInverted;
      type Actual = $AsInitial;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsInverted', () => {
    it('should be the true variant', () => {
      type Expected = $UseInverted<true>;
      type Actual = $AsInverted;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseInverted', () => {
      type Expected = $UseInverted;
      type Actual = $AsInverted;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
