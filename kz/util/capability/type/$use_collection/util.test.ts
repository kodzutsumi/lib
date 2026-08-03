import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsUnsafe,
  $AsEntries,
  $AsKeys,
  $GetCollection,
  $PickCollection,
  $UseCollection,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCollection - util', () => {
  describe('$GetCollection', () => {
    it('should pick the $UseCollection value from a settings object', () => {
      type Expected = 'entries';
      type Settings = $AsEntries & $AsUnsafe;
      type Actual = $GetCollection<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it("should default to 'entries' if the settings object does not have a $UseCollection value and if no default is provided", () => {
      type Expected = 'entries';
      type Settings = $AsUnsafe;
      type Actual = $GetCollection<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseCollection value', () => {
      type Expected = 'values';
      type Settings = $AsUnsafe;
      type Actual = $GetCollection<Settings, 'values'>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickCollection', () => {
    it('should pick the $UseCollection value from a settings object', () => {
      type Expected = $UseCollection<'keys'>;
      type Settings = $AsKeys & $AsUnsafe;
      type Actual = $PickCollection<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsEntries if the settings object does not have a $UseCollection value', () => {
      type Expected = $AsEntries;
      type Settings = $AsUnsafe;
      type Actual = $PickCollection<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
