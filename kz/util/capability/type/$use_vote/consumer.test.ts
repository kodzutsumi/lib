import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsMajority,
  $AsRunoff,
  $UseVote,
  $UseVoteKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseVote - consumer', () => {
  describe('$UseVote', () => {
    it('should be a capability flag consumer', () => {
      // @ts-expect-error - should only accept boolean values
      type _TS_EXPECT_ERROR = $UseVote<string>;
    });

    it('should be keyed by the $UseVoteKeyString', () => {
      type Expected = typeof $UseVoteKeyString;
      type Actual = keyof $UseVote;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have boolean setting by default', () => {
      type Expected = {
        [$UseVoteKeyString]: boolean;
      };
      type Actual = $UseVote;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsRunoff (default implied) with the false variant', () => {
      type Expected = $AsRunoff;
      type Actual = $UseVote<false>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be $AsMajority with the true variant', () => {
      type Expected = $AsMajority;
      type Actual = $UseVote<true>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
