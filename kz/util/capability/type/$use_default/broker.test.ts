import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $DefaultOf, $UseDefault } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDefault - broker', () => {
  describe('$DefaultOf (no DefaultType)', () => {
    it('should be unknown', () => {
      type Actual = $DefaultOf;
      type Expected = $UseDefault;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDefault', () => {
      type Actual = $DefaultOf;
      type Expected = $UseDefault;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$DefaultOf<string>', () => {
    it('should be string', () => {
      type Actual = $DefaultOf<string>;
      type Expected = $UseDefault<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDefault', () => {
      type Actual = $DefaultOf<string>;
      type Expected = $UseDefault;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$DefaultOf<DefaultType>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };

    it('should be Type', () => {
      type Actual = $DefaultOf<Type>;
      type Expected = $UseDefault<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseDefault', () => {
      type Actual = $DefaultOf<Type>;
      type Expected = $UseDefault;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
