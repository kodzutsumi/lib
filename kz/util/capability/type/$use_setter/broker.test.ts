import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $AsGetter, $AsSetter, $UseSetter } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseSetter - broker', () => {
  describe('$AsGetter (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseSetter<false>;
      type Actual = $AsGetter;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseSetter', () => {
      type Expected = $UseSetter;
      type Actual = $AsGetter;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsSetter', () => {
    it('should be the true variant', () => {
      type Expected = $UseSetter<true>;
      type Actual = $AsSetter;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseSetter', () => {
      type Expected = $UseSetter;
      type Actual = $AsSetter;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
