import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { NotResult } from './mod.ts';

const IS_TRUE = true;

describe('NotResult', () => {
  describe('with true', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = NotResult<true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = NotResult<false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = NotResult<boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
