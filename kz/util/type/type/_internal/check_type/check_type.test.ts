import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsDistributed, $AsLoose, $AsUnsafe } from '@kz/util/capability';

import type { Any } from '../../any.ts';
import type { CheckType } from './check_type.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;

describe('CheckType', () => {
  describe('$AsSafe (default)', () => {
    it('should retain boolean result', () => {
      type Expected = boolean;
      type Actual = CheckType<AnyType, never, $AsDistributed>;
      type Result = IsExact<Actual, Expected>;
      
      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    it('should convert to boolean result', () => {
      type Expected = true;
      type Actual = CheckType<AnyType, never, $AsLoose & $AsUnsafe>;
      type Result = IsExact<Actual, Expected>;
      
      assertType<Result>(IS_TRUE);
    });
  });
});
