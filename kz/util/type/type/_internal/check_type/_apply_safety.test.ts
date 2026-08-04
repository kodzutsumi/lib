import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsSafe, $AsUnsafe } from '@kz/util/capability';

import type { _ApplySafety } from './_apply_safety.ts';

const IS_TRUE = true;

describe('_ApplySafety', () => {
  describe('$AsSafe (default)', () => {
    type Settings = $AsSafe;

    describe('Type: boolean', () => {
      type Type = boolean;

      it('should return boolean', () => {
        type Expected = boolean;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Type: true', () => {
      type Type = true;

      it('should return true', () => {
        type Expected = true;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Type: false', () => {
      type Type = false;

      it('should return false', () => {
        type Expected = false;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$AsUnsafe', () => {
    type Settings = $AsUnsafe;

    describe('Type: boolean', () => {
      type Type = boolean;

      it('should return true', () => {
        type Expected = true;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Type: true', () => {
      type Type = true;

      it('should return true', () => {
        type Expected = true;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('Type: false', () => {
      type Type = false;

      it('should return false', () => {
        type Expected = false;
        type Actual = _ApplySafety<Type, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
