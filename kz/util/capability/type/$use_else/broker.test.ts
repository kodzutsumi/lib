import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $Else, $UseElse } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseElse - broker', () => {
  describe('$Else (no ElseType)', () => {
    it('should be unknown', () => {
      type Actual = $Else;
      type Expected = $UseElse;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseElse', () => {
      type Actual = $Else;
      type Expected = $UseElse;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Else<string>', () => {
    it('should be string', () => {
      type Actual = $Else<string>;
      type Expected = $UseElse<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseElse', () => {
      type Actual = $Else<string>;
      type Expected = $UseElse;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Else<ElseType>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };

    it('should be Type', () => {
      type Actual = $Else<Type>;
      type Expected = $UseElse<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseElse', () => {
      type Actual = $Else<Type>;
      type Expected = $UseElse;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
