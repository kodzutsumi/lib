import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsOptional,
  $AsRequired,
  $GetOptional,
  $PickOptional,
  $UseOptional,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOptional - util', () => {
  describe('$GetOptional', () => {
    it('should pick the $UseOptional value from a settings object', () => {
      type Expected = true;
      type Settings = $AsOptional & $AsCondition;
      type Actual = $GetOptional<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseOptional value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetOptional<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseOptional value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetOptional<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickOptional', () => {
    it('should pick the $UseOptional value from a settings object', () => {
      type Expected = $UseOptional<false>;
      type Settings = $AsRequired & $AsCondition;
      type Actual = $PickOptional<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsRequired if the settings object does not have a $UseOptional value', () => {
      type Expected = $AsRequired;
      type Settings = $AsCondition;
      type Actual = $PickOptional<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
