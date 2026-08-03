import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsExcluded,
  $AsIncluded,
  $UseExcluded,
  $UseExcludedKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseExcluded - consumer', () => {
  describe('$UseExcluded', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseExcluded<string>;
    });

    it('should be keyed by the $UseExcludedKeyString', () => {
      type Expected = typeof $UseExcludedKeyString;
      type Actual = keyof $UseExcluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseExcludedKeyString]: boolean;
      };
      type Actual = $UseExcluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsIncluded (default implied) with the false variant', () => {
      type Expected = $AsIncluded;
      type Actual = $UseExcluded<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsExcluded with the true variant', () => {
      type Expected = $AsExcluded;
      type Actual = $UseExcluded<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
