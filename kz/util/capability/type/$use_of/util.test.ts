import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $GetOf,
  $Of,
  $PickOf,
  $UseOf,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOf - util', () => {
  describe('$GetOf', () => {
    it('should pick the $UseOf value from a settings object', () => {
      type Expected = number;
      type Settings = $Of<number> & $AsUnsafe;
      type Actual = $GetOf<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to unknown if the settings object does not have a $UseOf value and if no default is provided', () => {
      type Expected = unknown;
      type Settings = $AsUnsafe;
      type Actual = $GetOf<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseOf value', () => {
      type Expected = symbol;
      type Settings = $AsUnsafe;
      type Actual = $GetOf<Settings, symbol>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickOf', () => {
    it('should pick the $UseOf value from a settings object', () => {
      type Expected = $UseOf<number>;
      type Settings = $Of<number> & $AsUnsafe;
      type Actual = $PickOf<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Of<unknown> if the settings object does not have a $UseOf value', () => {
      type Expected = $Of<unknown>;
      type Settings = $AsUnsafe;
      type Actual = $PickOf<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
