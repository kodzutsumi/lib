import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsExcluded,
  $AsIncluded,
  $GetExcluded,
  $PickExcluded,
  $UseExcluded,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseExcluded - util', () => {
  describe('$GetExcluded', () => {
    it('should pick the $UseExcluded value from a settings object', () => {
      type Expected = true;
      type Settings = $AsExcluded & $AsCondition;
      type Actual = $GetExcluded<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseExcluded value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetExcluded<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseExcluded value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetExcluded<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickExcluded', () => {
    it('should pick the $UseExcluded value from a settings object', () => {
      type Expected = $UseExcluded<false>;
      type Settings = $AsIncluded & $AsCondition;
      type Actual = $PickExcluded<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsIncluded if the settings object does not have a $UseExcluded value', () => {
      type Expected = $AsIncluded;
      type Settings = $AsCondition;
      type Actual = $PickExcluded<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
