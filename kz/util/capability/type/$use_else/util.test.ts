import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $Else,
  $GetElse,
  $PickElse,
  $UseElse,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseElse - util', () => {
  describe('$GetElse', () => {
    it('should pick the $UseElse value from a settings object', () => {
      type Expected = number;
      type Settings = $Else<number> & $AsUnsafe;
      type Actual = $GetElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to unknown if the settings object does not have a $UseElse value and if no default is provided', () => {
      type Expected = unknown;
      type Settings = $AsUnsafe;
      type Actual = $GetElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseElse value', () => {
      type Expected = symbol;
      type Settings = $AsUnsafe;
      type Actual = $GetElse<Settings, symbol>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickElse', () => {
    it('should pick the $UseElse value from a settings object', () => {
      type Expected = $UseElse<number>;
      type Settings = $Else<number> & $AsUnsafe;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Else<unknown> if the settings object does not have a $UseElse value', () => {
      type Expected = $Else<unknown>;
      type Settings = $AsUnsafe;
      type Actual = $PickElse<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
