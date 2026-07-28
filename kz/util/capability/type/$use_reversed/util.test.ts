import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsForward,
  $AsReversed,
  $GetReversed,
  $PickReversed,
  $UseReversed,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseReversed - util', () => {
  describe('$GetReversed', () => {
    it('should pick the $UseReversed value from a settings object', () => {
      type Expected = true;
      type Settings = $AsReversed & $AsCondition;
      type Actual = $GetReversed<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseReversed value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetReversed<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseReversed value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetReversed<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickReversed', () => {
    it('should pick the $UseReversed value from a settings object', () => {
      type Expected = $UseReversed<false>;
      type Settings = $AsForward & $AsCondition;
      type Actual = $PickReversed<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsForward if the settings object does not have a $UseReversed value', () => {
      type Expected = $AsForward;
      type Settings = $AsCondition;
      type Actual = $PickReversed<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
