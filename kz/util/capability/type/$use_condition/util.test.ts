import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $ConditionOf,
  $Else,
  $PickCondition,
  $Then,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCondition - util', () => {
  describe('$PickCondition', () => {
    it('should pick the $UseCondition value from a settings object', () => {
      type Expected = $Then<string> & $Else<number>;
      type Settings = $ConditionOf<string, number> & $AsUnsafe;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Then & $Else if the settings object does not have a $UseCondition value', () => {
      type Expected = $Then & $Else;
      type Settings = $AsUnsafe;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should imply $Else if the settings object does not have an $Else value', () => {
      type Expected = $Then<string> & $Else;
      type Settings = $AsUnsafe & $Then<string>;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should imply $Then if the settings object does not have an $Then value', () => {
      type Expected = $Then & $Else<number>;
      type Settings = $AsUnsafe & $Else<number>;
      type Actual = $PickCondition<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
