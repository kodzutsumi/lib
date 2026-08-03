import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsImmutable,
  $AsMutable,
  $UseImmutable,
  $UseImmutableKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseImmutable - consumer', () => {
  describe('$UseImmutable', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseImmutable<string>;
    });

    it('should be keyed by the $UseImmutableKeyString', () => {
      type Expected = typeof $UseImmutableKeyString;
      type Actual = keyof $UseImmutable;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseImmutableKeyString]: boolean;
      };
      type Actual = $UseImmutable;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsMutable (default implied) with the false variant', () => {
      type Expected = $AsMutable;
      type Actual = $UseImmutable<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsImmutable with the true variant', () => {
      type Expected = $AsImmutable;
      type Actual = $UseImmutable<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
