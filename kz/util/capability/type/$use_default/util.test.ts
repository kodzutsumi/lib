import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $DefaultOf,
  $GetDefault,
  $PickDefault,
  $UseDefault,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDefault - util', () => {
  describe('$GetDefault', () => {
    it('should pick the $UseDefault value from a settings object', () => {
      type Expected = number;
      type Settings = $DefaultOf<number> & $AsUnsafe;
      type Actual = $GetDefault<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to unknown if the settings object does not have a $UseDefault value and if no default is provided', () => {
      type Expected = unknown;
      type Settings = $AsUnsafe;
      type Actual = $GetDefault<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseDefault value', () => {
      type Expected = symbol;
      type Settings = $AsUnsafe;
      type Actual = $GetDefault<Settings, symbol>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickDefault', () => {
    it('should pick the $UseDefault value from a settings object', () => {
      type Expected = $UseDefault<number>;
      type Settings = $DefaultOf<number> & $AsUnsafe;
      type Actual = $PickDefault<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $DefaultOf<unknown> if the settings object does not have a $UseDefault value', () => {
      type Expected = $DefaultOf<unknown>;
      type Settings = $AsUnsafe;
      type Actual = $PickDefault<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
