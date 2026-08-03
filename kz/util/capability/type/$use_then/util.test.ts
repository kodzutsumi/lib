import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  $AsUnsafe,
  $GetThen,
  $PickThen,
  $Then,
  $UseThen,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseThen - util', () => {
  describe('$GetThen', () => {
    it('should pick the $UseThen value from a settings object', () => {
      type Expected = string;
      type Settings = $Then<string> & $AsUnsafe;
      type Actual = $GetThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to unknown if the settings object does not have a $UseThen value and if no default is provided', () => {
      type Expected = unknown;
      type Settings = $AsUnsafe;
      type Actual = $GetThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseThen value', () => {
      type Expected = symbol;
      type Settings = $AsUnsafe;
      type Actual = $GetThen<Settings, symbol>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickThen', () => {
    it('should pick the $UseThen value from a settings object', () => {
      type Expected = $UseThen<string>;
      type Settings = $Then<string> & $AsUnsafe;
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $Then<unknown> if the settings object does not have a $UseThen value', () => {
      type Expected = $Then;
      type Settings = $AsUnsafe;
      type Actual = $PickThen<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
