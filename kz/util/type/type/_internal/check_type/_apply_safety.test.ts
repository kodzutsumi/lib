import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsUnified, $AsUnsafe } from '@kz/util/capability';

import type { _ApplySafety } from './_apply_safety.ts';

const IS_TRUE = true;

describe('_ApplySafety', () => {
  describe('$AsSafe (default)', () => {
    type Settings = $AsUnified;

    it('should retain boolean', () => {
      type Expected = boolean;
      type Actual = _ApplySafety<boolean, Settings>;
      type Result = IsExact<Expected, Actual>;
      
      assertType<Result>(IS_TRUE);
    });

    it('should retain true', () => {
      type Expected = true;
      type Actual = _ApplySafety<true, Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain false', () => {
      type Expected = false;
      type Actual = _ApplySafety<false, Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    type Settings = $AsUnified & $AsUnsafe;
    it('should convert boolean to true', () => {
      type Expected = true;
      type Actual = _ApplySafety<boolean, Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain true', () => {
      type Expected = true;
      type Actual = _ApplySafety<true, Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should retain false', () => {
      type Expected = false;
      type Actual = _ApplySafety<false, Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
