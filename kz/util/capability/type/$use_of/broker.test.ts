import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $Of, $UseOf } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOf - broker', () => {
  describe('$Of (no OfType)', () => {
    it('should be unknown', () => {
      type Actual = $Of;
      type Expected = $UseOf;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOf', () => {
      type Actual = $Of;
      type Expected = $UseOf;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Of<string>', () => {
    it('should be string', () => {
      type Actual = $Of<string>;
      type Expected = $UseOf<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOf', () => {
      type Actual = $Of<string>;
      type Expected = $UseOf;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Of<OfType>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };

    it('should be Type', () => {
      type Actual = $Of<Type>;
      type Expected = $UseOf<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseOf', () => {
      type Actual = $Of<Type>;
      type Expected = $UseOf;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
