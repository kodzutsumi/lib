import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsForward,
  $AsNullSetting,
  $UseNullSetting,
} from '@kz/util/capability';
import { Permit } from '@kz/util/lint';

const IS_TRUE = true;

describe('$UseNullSetting - broker', () => {
  describe('$AsNullSetting', () => {
    it('should be the only (default) variant', () => {
      type Expected = $UseNullSetting;
      type Actual = $AsNullSetting;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be {}', () => {
      type Expected = Permit<'{}', '@i11n/kz/permit#testing'>;
      type Actual = $AsNullSetting;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseNullSetting', () => {
      type Expected = $UseNullSetting;
      type Actual = $AsNullSetting;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
