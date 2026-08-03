import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type { $Type, $UseType } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseType - broker', () => {
  describe('$Type (no FromType)', () => {
    it('should be unknown', () => {
      type Actual = $Type;
      type Expected = $UseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseType', () => {
      type Actual = $Type;
      type Expected = $UseType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Type<string>', () => {
    it('should be string', () => {
      type Actual = $Type<string>;
      type Expected = $UseType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseType', () => {
      type Actual = $Type<string>;
      type Expected = $UseType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Type<FromType>', () => {
    type Type = {
      prop1: string;
      prop2: number;
      prop3: boolean;
    };

    it('should be Type', () => {
      type Actual = $Type<Type>;
      type Expected = $UseType<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseType', () => {
      type Actual = $Type<Type>;
      type Expected = $UseType;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
