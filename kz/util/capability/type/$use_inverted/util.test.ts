import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsInitial,
  $AsInverted,
  $GetInverted,
  $PickInverted,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseInverted - util', () => {
  describe('$GetInverted', () => {
    it('should pick the $UseInverted value from a settings object', () => {
      type Expected = true;
      type Settings = $AsInverted & $AsCondition;
      type Actual = $GetInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseInverted value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseInverted value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetInverted<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickInverted', () => {
    it('should pick the $UseInverted value from a settings object', () => {
      type Expected = $AsInitial;
      type Settings = $AsInitial & $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsInitial if the settings object does not have a $UseInverted value and no default is provided', () => {
      type Expected = $AsInitial;
      type Settings = $AsCondition;
      type Actual = $PickInverted<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseInverted value', () => {
      type Expected = $AsInverted;
      type Settings = $AsCondition;
      type Actual = $PickInverted<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
