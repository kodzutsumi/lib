import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsFalseMajority,
  $AsSafe,
  $AsTie,
  $AsTrueMajority,
  $AsUnsafe,
  $UseUnsafe,
  $UseVote,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseUnsafe - broker', () => {
  describe('$AsSafe (implied default)', () => {
    it('should be the false (default) variant', () => {
      type Expected = $UseUnsafe<false>;
      type Actual = $AsSafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsSafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsUnsafe', () => {
    it('should be the true variant', () => {
      type Expected = $UseUnsafe<true>;
      type Actual = $AsUnsafe;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseUnsafe', () => {
      type Expected = $UseUnsafe;
      type Actual = $AsUnsafe;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsFalseMajority (default/implied)', () => {
    it('should be the false variant of $UseVote', () => {
      type Expected = $UseVote<false>;
      type Actual = $AsFalseMajority;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsFalseMajority;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsTrueMajority', () => {
    it('should be the true variant of $UseVote', () => {
      type Expected = $UseVote<true>;
      type Actual = $AsTrueMajority;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTrueMajority;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsTie', () => {
    it('should be the boolean variant of $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTie;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseVote', () => {
      type Expected = $UseVote;
      type Actual = $AsTie;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
