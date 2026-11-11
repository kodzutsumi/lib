// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsInverted,
  $AsMajority,
  $AsUnsafe,
  $ConditionOf,
  $Else,
  $Then,
  $UseVote,
} from '@kz/util/capability';

import type { GetLogicResult } from './mod.ts';

const IS_TRUE = true;

describe('GetLogicResult', () => {
  describe('$AsCondition (default/implied)', () => {
    describe('$AsInitial (default/implied)', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<boolean>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<true>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<true>>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<false>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<false>>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<boolean>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<boolean>>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<boolean>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        type $Settings = $AsUnsafe;

        describe('$AsRunoff (default/implied)', () => {
          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean', () => {
            type Expected = true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<boolean>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsUnsafe;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean', () => {
            type Expected = true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<boolean>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsInverted;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<true>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<false>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<boolean>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsInverted;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for $UseVote<boolean>', () => {
            type Expected = boolean;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsUnsafe & $AsInverted;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean', () => {
            type Expected = false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<boolean>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsUnsafe & $AsInverted;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean', () => {
            type Expected = false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<boolean>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });

  describe('$Then<string>', () => {
    describe('$AsInitial (default/implied)', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $Then<string>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<true>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<false>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<boolean>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $Then<string>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<boolean>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsUnsafe & $Then<string>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean', () => {
            type Expected = string;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<boolean>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsUnsafe & $Then<string>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false', () => {
            type Expected = false;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean', () => {
            type Expected = string;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<boolean>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsInverted & $Then<string>;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<true>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<false>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<boolean>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsInverted & $Then<string>;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for $UseVote<boolean>', () => {
            type Expected = string | false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsUnsafe & $AsInverted & $Then<string>;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean', () => {
            type Expected = false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<false>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<boolean>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings =
            & $AsMajority
            & $AsUnsafe
            & $AsInverted
            & $Then<string>;

          it('should return false for true', () => {
            type Expected = false;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean', () => {
            type Expected = false;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<true>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for $UseVote<boolean>', () => {
            type Expected = false;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });

  describe('$Else<number>', () => {
    describe('$AsInitial (default/implied)', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $Else<number>;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for boolean', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<true>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<false>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<boolean>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $Else<number>;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for boolean', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<boolean>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsUnsafe & $Else<number>;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean', () => {
            type Expected = true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<boolean>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsUnsafe & $Else<number>;

          it('should return true for true', () => {
            type Expected = true;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean', () => {
            type Expected = true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<true>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<boolean>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsInverted & $Else<number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for boolean', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<true>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<false>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<boolean>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $AsInverted & $Else<number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for boolean', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number | true for $UseVote<boolean>', () => {
            type Expected = number | true;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsUnsafe & $AsInverted & $Else<number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean', () => {
            type Expected = number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<boolean>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings =
            & $AsMajority
            & $AsUnsafe
            & $AsInverted
            & $Else<number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false', () => {
            type Expected = true;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean', () => {
            type Expected = number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for $UseVote<false>', () => {
            type Expected = true;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<boolean>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });

  describe('$ConditionOf<string, number>', () => {
    describe('$AsInitial (default/implied)', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $ConditionOf<string, number>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<true>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<false>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<boolean>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings = $AsMajority & $ConditionOf<string, number>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<boolean>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        type $Settings = $AsUnsafe & $ConditionOf<string, number>;

        describe('$AsRunoff (default/implied)', () => {
          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean', () => {
            type Expected = string;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<boolean>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings =
            & $AsMajority
            & $AsUnsafe
            & $ConditionOf<string, number>;

          it('should return string for true', () => {
            type Expected = string;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false', () => {
            type Expected = number;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean', () => {
            type Expected = string;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<true>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<boolean>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings = $AsInverted & $ConditionOf<string, number>;
          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<true>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<false>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<boolean>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings =
            & $AsMajority
            & $AsInverted
            & $ConditionOf<string, number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for $UseVote<boolean>', () => {
            type Expected = string | number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type $Settings =
            & $AsUnsafe
            & $AsInverted
            & $ConditionOf<string, number>;

          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean', () => {
            type Expected = number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<false>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<boolean>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type $Settings =
            & $AsMajority
            & $AsUnsafe
            & $AsInverted
            & $ConditionOf<string, number>;
          it('should return number for true', () => {
            type Expected = number;
            type Actual = GetLogicResult<true, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false', () => {
            type Expected = string;
            type Actual = GetLogicResult<false, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean', () => {
            type Expected = number;
            type Actual = GetLogicResult<boolean, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<true>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<true>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for $UseVote<false>', () => {
            type Expected = string;
            type Actual = GetLogicResult<$UseVote<false>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for $UseVote<boolean>', () => {
            type Expected = number;
            type Actual = GetLogicResult<$UseVote<boolean>, $Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
});
