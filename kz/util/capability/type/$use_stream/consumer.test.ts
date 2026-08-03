import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsPredicate,
  $AsStream,
  $UseStream,
  $UseStreamKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStream - consumer', () => {
  describe('$UseStream', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseStream<string>;
    });

    it('should be keyed by the $UseStreamKeyString', () => {
      type Expected = typeof $UseStreamKeyString;
      type Actual = keyof $UseStream;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseStreamKeyString]: boolean;
      };
      type Actual = $UseStream;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsPredicate (default implied) with the false variant', () => {
      type Expected = $AsPredicate;
      type Actual = $UseStream<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsStream with the true variant', () => {
      type Expected = $AsStream;
      type Actual = $UseStream<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
