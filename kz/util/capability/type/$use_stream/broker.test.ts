import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $AsPredicate, $AsStream, $UseStream } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStream - broker', () => {
  describe('$AsPredicate (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseStream<false>;
      type Actual = $AsPredicate;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseStream', () => {
      type Expected = $UseStream;
      type Actual = $AsPredicate;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsStream', () => {
    it('should be the true variant', () => {
      type Expected = $UseStream<true>;
      type Actual = $AsStream;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseStream', () => {
      type Expected = $UseStream;
      type Actual = $AsStream;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
