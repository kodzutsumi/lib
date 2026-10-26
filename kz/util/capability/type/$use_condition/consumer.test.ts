// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsStrict,
  $UseCondition,
  $UseElse,
  $UseThen,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCondition - consumer', () => {
  describe('$UseCondition', () => {
    describe('AsLoose (default/implied)', () => {
      it('should be a union of $UseThen and $UseElse', () => {
        type Expected = $UseThen | $UseElse;
        type Actual = $UseCondition;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('$AsStrict', () => {
      it('should be an intersection of $UseThen and $UseElse', () => {
        type Expected = $UseThen & $UseElse;
        type Actual = $UseCondition<$AsStrict>;
        type Result = IsExact<Actual, Expected>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
