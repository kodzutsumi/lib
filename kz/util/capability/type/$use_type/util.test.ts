import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $GetType,
  $PickType,
  $Type,
  $UseType,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseType - util', () => {
  describe('$GetType', () => {
    it('should pick the $UseType value from a settings object', () => {
      type Expected = number;
      type Settings = $Type<number> & $AsUnsafe;
      type Actual = $GetType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to unknown if the settings object does not have a $UseType value and if no default is provided', () => {
      type Expected = unknown;
      type Settings = $AsUnsafe;
      type Actual = $GetType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseType value', () => {
      type Expected = symbol;
      type Settings = $AsUnsafe;
      type Actual = $GetType<Settings, symbol>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickType', () => {
    it('should pick the $UseType value from a settings object', () => {
      type Expected = $UseType<number>;
      type Settings = $Type<number> & $AsUnsafe;
      type Actual = $PickType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Type<unknown> if the settings object does not have a $UseType value', () => {
      type Expected = $Type<unknown>;
      type Settings = $AsUnsafe;
      type Actual = $PickType<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
