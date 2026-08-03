import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsDeep,
  $AsShallow,
  $Level,
  $UseDepth,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDepth - broker', () => {
  describe('$AsShallow (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseDepth<false>;
      type Actual = $AsShallow;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDepth', () => {
      type Expected = $UseDepth;
      type Actual = $AsShallow;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsDeep', () => {
    it('should be the true variant', () => {
      type Expected = $UseDepth<true>;
      type Actual = $AsDeep;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDepth', () => {
      type Expected = $UseDepth;
      type Actual = $AsDeep;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Level', () => {
    it('should be the true variant', () => {
      type Expected = $UseDepth<8>;
      type Actual = $Level<8>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDepth', () => {
      type Expected = $UseDepth;
      type Actual = $Level<8>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
