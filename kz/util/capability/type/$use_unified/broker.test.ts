import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsDistributed,
  $AsUnified,
  $UseUnified,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnified - broker', () => {
  describe('$AsDistributed (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseUnified<false>;
      type Actual = $AsDistributed;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnified', () => {
      type Expected = $UseUnified;
      type Actual = $AsDistributed;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnified', () => {
    it('should be the true variant', () => {
      type Expected = $UseUnified<true>;
      type Actual = $AsUnified;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnified', () => {
      type Expected = $UseUnified;
      type Actual = $AsUnified;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
