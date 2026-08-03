import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsNullSetting,
  $IsNullSetting,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseNullSetting - util', () => {
  describe('$IsNullSetting', () => {
    it('should return true if no settings are set', () => {
      type Expected = true;
      type Settings = $AsNullSetting;
      type Actual = $IsNullSetting<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return false if a setting is set', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $IsNullSetting<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
