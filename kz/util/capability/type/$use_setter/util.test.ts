import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsGetter,
  $AsSetter,
  $GetSetter,
  $PickSetter,
  $UseSetter,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseSetter - util', () => {
  describe('$GetSetter', () => {
    it('should pick the $UseSetter value from a settings object', () => {
      type Expected = true;
      type Settings = $AsSetter & $AsCondition;
      type Actual = $GetSetter<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseSetter value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetSetter<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseSetter value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetSetter<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickSetter', () => {
    it('should pick the $UseSetter value from a settings object', () => {
      type Expected = $UseSetter<false>;
      type Settings = $AsGetter & $AsCondition;
      type Actual = $PickSetter<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsGetter if the settings object does not have a $UseSetter value', () => {
      type Expected = $AsGetter;
      type Settings = $AsCondition;
      type Actual = $PickSetter<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
