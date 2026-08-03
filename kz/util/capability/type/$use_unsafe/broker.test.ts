import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsForward,
  $AsReversed,
  $UseReversed,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseReversed - broker', () => {
  describe('$AsForward (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseReversed<false>;
      type Actual = $AsForward;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseReversed', () => {
      type Expected = $UseReversed;
      type Actual = $AsForward;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsReversed', () => {
    it('should be the true variant', () => {
      type Expected = $UseReversed<true>;
      type Actual = $AsReversed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseReversed', () => {
      type Expected = $UseReversed;
      type Actual = $AsReversed;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
