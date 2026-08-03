import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsLoose,
  $AsStrict,
  $GetStrict,
  $PickStrict,
  $UseStrict,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStrict - util', () => {
  describe('$GetStrict', () => {
    it('should pick the $UseStrict value from a settings object', () => {
      type Expected = true;
      type Settings = $AsStrict & $AsCondition;
      type Actual = $GetStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseStrict value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseStrict value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetStrict<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickStrict', () => {
    it('should pick the $UseStrict value from a settings object', () => {
      type Expected = $UseStrict<false>;
      type Settings = $AsLoose & $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsLoose if the settings object does not have a $UseStrict value', () => {
      type Expected = $AsLoose;
      type Settings = $AsCondition;
      type Actual = $PickStrict<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
