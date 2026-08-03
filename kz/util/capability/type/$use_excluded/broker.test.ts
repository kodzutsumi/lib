import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsExcluded,
  $AsIncluded,
  $UseExcluded,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseExcluded - broker', () => {
  describe('$AsIncluded (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseExcluded<false>;
      type Actual = $AsIncluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseExcluded', () => {
      type Expected = $UseExcluded;
      type Actual = $AsIncluded;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsExcluded', () => {
    it('should be the true variant', () => {
      type Expected = $UseExcluded<true>;
      type Actual = $AsExcluded;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseExcluded', () => {
      type Expected = $UseExcluded;
      type Actual = $AsExcluded;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
