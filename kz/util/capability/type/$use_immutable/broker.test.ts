import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsImmutable,
  $AsMutable,
  $UseImmutable,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseImmutable - broker', () => {
  describe('$AsMutable (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseImmutable<false>;
      type Actual = $AsMutable;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseImmutable', () => {
      type Expected = $UseImmutable;
      type Actual = $AsMutable;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsImmutable', () => {
    it('should be the true variant', () => {
      type Expected = $UseImmutable<true>;
      type Actual = $AsImmutable;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseImmutable', () => {
      type Expected = $UseImmutable;
      type Actual = $AsImmutable;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
