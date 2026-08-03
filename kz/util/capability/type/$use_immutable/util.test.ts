import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsImmutable,
  $AsMutable,
  $GetImmutable,
  $PickImmutable,
  $UseImmutable,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseImmutable - util', () => {
  describe('$GetImmutable', () => {
    it('should pick the $UseImmutable value from a settings object', () => {
      type Expected = true;
      type Settings = $AsImmutable & $AsCondition;
      type Actual = $GetImmutable<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseImmutable value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetImmutable<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseImmutable value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetImmutable<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickImmutable', () => {
    it('should pick the $UseImmutable value from a settings object', () => {
      type Expected = $UseImmutable<false>;
      type Settings = $AsMutable & $AsCondition;
      type Actual = $PickImmutable<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsMutable if the settings object does not have a $UseImmutable value', () => {
      type Expected = $AsMutable;
      type Settings = $AsCondition;
      type Actual = $PickImmutable<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
