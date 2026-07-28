import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsFalseMajority,
  $AsMajority,
  $AsRunoff,
  $AsTie,
  $AsTrueMajority,
  $GetVote,
  $PickVote,
  $UseVote,
  $Vote,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseVote - util', () => {
  describe('$GetVote', () => {
    it('should pick the $UseVote value from a settings object', () => {
      type Expected = true;
      type Settings = $AsMajority & $AsCondition;
      type Actual = $GetVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseVote value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseVote value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetVote<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickVote', () => {
    it('should pick the $UseVote value from a settings object', () => {
      type Expected = $UseVote<false>;
      type Settings = $AsRunoff & $AsCondition;
      type Actual = $PickVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsRunoff if the settings object does not have a $UseVote value', () => {
      type Expected = $AsRunoff;
      type Settings = $AsCondition;
      type Actual = $PickVote<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$Vote', () => {
    describe('$AsRunoff (default/implied)', () => {
      describe('with a boolean value', () => {
        it('should return true for true', () => {
          type Expected = true;
          type Actual = $Vote<true>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for false', () => {
          type Expected = false;
          type Actual = $Vote<false>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for boolean', () => {
          type Expected = boolean;
          type Actual = $Vote<boolean>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with a $Vote value', () => {
        it('should return boolean for $AsTrueMajority', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTrueMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return boolean for $AsFalseMajority', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsFalseMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for $AsTie', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTie>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsMajority', () => {
      describe('with a boolean value', () => {
        it('should return true for true', () => {
          type Expected = true;
          type Actual = $Vote<true, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for false', () => {
          type Expected = false;
          type Actual = $Vote<false, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for boolean', () => {
          type Expected = boolean;
          type Actual = $Vote<boolean, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('with a $Vote value', () => {
        it('should return true for $AsTrueMajority', () => {
          type Expected = true;
          type Actual = $Vote<$AsTrueMajority, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for $AsFalseMajority', () => {
          type Expected = false;
          type Actual = $Vote<$AsFalseMajority, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });

        it('should return a boolean for $AsTie', () => {
          type Expected = boolean;
          type Actual = $Vote<$AsTie, $AsMajority>;
          type Result = IsExact<Expected, Actual>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
