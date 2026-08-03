import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $DefaultOf,
  $UseDefault,
  $UseDefaultKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDefault - consumer', () => {
  describe('$UseDefault', () => {
    it('should be keyed by the $UseDefaultKeyString', () => {
      type Expected = typeof $UseDefaultKeyString;
      type Actual = keyof $UseDefault;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseDefaultKeyString]: unknown;
      };
      type Actual = $UseDefault;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $DefaultOf<string>;
      type Actual = $UseDefault<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
