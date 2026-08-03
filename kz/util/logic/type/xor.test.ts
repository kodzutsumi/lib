import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsInverted,
  $AsMajority,
  $AsUnsafe,
  $ConditionOf,
  $Else,
  $Then,
} from '@kz/util/capability';
import type { Xor } from '@kz/util/logic';

const IS_TRUE = true;

describe('Xor', () => {
  describe('$AsCondition (default/implied)', () => {
    describe('$AsInitial (default/implied)', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for true/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<true, boolean>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for false/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<false, boolean>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/true', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, true>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/false', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, false>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, boolean>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $AsMajority;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for true/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for false/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/true', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/false', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $AsUnsafe;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/boolean', () => {
            type Expected = true;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/boolean', () => {
            type Expected = true;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/true', () => {
            type Expected = true;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/false', () => {
            type Expected = true;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/boolean', () => {
            type Expected = true;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $AsUnsafe & $AsMajority;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/boolean', () => {
            type Expected = true;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/boolean', () => {
            type Expected = true;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/true', () => {
            type Expected = true;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/false', () => {
            type Expected = true;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/boolean', () => {
            type Expected = true;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $AsInverted;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for true/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for false/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/true', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/false', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $AsInverted & $AsMajority;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for true/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for false/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/true', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/false', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return boolean for boolean/boolean', () => {
            type Expected = boolean;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $AsInverted & $AsUnsafe;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/boolean', () => {
            type Expected = false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/boolean', () => {
            type Expected = false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/true', () => {
            type Expected = false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/false', () => {
            type Expected = false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/boolean', () => {
            type Expected = false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $AsInverted & $AsUnsafe & $AsMajority;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/boolean', () => {
            type Expected = false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/boolean', () => {
            type Expected = false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/true', () => {
            type Expected = false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/false', () => {
            type Expected = false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/boolean', () => {
            type Expected = false;
            type Actual = Xor<boolean, boolean, Settings>;
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
          type Settings = $Then<string>;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for true/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for false/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/true', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/false', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Then<string> & $AsMajority;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for true/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for false/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/true', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/false', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Then<string> & $AsUnsafe;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/boolean', () => {
            type Expected = string;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/boolean', () => {
            type Expected = string;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/true', () => {
            type Expected = string;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/false', () => {
            type Expected = string;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/boolean', () => {
            type Expected = string;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Then<string> & $AsUnsafe & $AsMajority;

          it('should return false for true/true', () => {
            type Expected = false;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/boolean', () => {
            type Expected = string;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/false', () => {
            type Expected = false;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/boolean', () => {
            type Expected = string;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/true', () => {
            type Expected = string;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/false', () => {
            type Expected = string;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/boolean', () => {
            type Expected = string;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Then<string> & $AsInverted;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for true/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for false/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/true', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/false', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Then<string> & $AsInverted & $AsMajority;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for true/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for false/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/true', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/false', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | false for boolean/boolean', () => {
            type Expected = string | false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Then<string> & $AsInverted & $AsUnsafe;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/boolean', () => {
            type Expected = false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/boolean', () => {
            type Expected = false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/true', () => {
            type Expected = false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/false', () => {
            type Expected = false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/boolean', () => {
            type Expected = false;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Then<string> & $AsInverted & $AsUnsafe & $AsMajority;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/false', () => {
            type Expected = false;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for true/boolean', () => {
            type Expected = false;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/true', () => {
            type Expected = false;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for false/boolean', () => {
            type Expected = false;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/true', () => {
            type Expected = false;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/false', () => {
            type Expected = false;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return false for boolean/boolean', () => {
            type Expected = false;
            type Actual = Xor<boolean, boolean, Settings>;
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
          type Settings = $Else<number>;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for true/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for false/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/true', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/false', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Else<number> & $AsMajority;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for true/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for false/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/true', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/false', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Else<number> & $AsUnsafe;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/boolean', () => {
            type Expected = true;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/boolean', () => {
            type Expected = true;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/true', () => {
            type Expected = true;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/false', () => {
            type Expected = true;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/boolean', () => {
            type Expected = true;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Else<number> & $AsUnsafe & $AsMajority;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/false', () => {
            type Expected = true;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for true/boolean', () => {
            type Expected = true;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/true', () => {
            type Expected = true;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/boolean', () => {
            type Expected = true;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/true', () => {
            type Expected = true;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/false', () => {
            type Expected = true;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for boolean/boolean', () => {
            type Expected = true;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Else<number> & $AsInverted;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for true/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for false/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/true', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/false', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Else<number> & $AsInverted & $AsMajority;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for true/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for false/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/true', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/false', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true | number for boolean/boolean', () => {
            type Expected = true | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $Else<number> & $AsInverted & $AsUnsafe;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/boolean', () => {
            type Expected = number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/boolean', () => {
            type Expected = number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/true', () => {
            type Expected = number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/false', () => {
            type Expected = number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/boolean', () => {
            type Expected = number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $Else<number> & $AsInverted & $AsUnsafe & $AsMajority;

          it('should return true for true/true', () => {
            type Expected = true;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/boolean', () => {
            type Expected = number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return true for false/false', () => {
            type Expected = true;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/boolean', () => {
            type Expected = number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/true', () => {
            type Expected = number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/false', () => {
            type Expected = number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/boolean', () => {
            type Expected = number;
            type Actual = Xor<boolean, boolean, Settings>;
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
          type Settings = $ConditionOf<string, number>;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for true/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for false/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/true', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/false', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings = $ConditionOf<string, number> & $AsMajority;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for true/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for false/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/true', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/false', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $ConditionOf<string, number> & $AsUnsafe;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/boolean', () => {
            type Expected = string;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/boolean', () => {
            type Expected = string;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/true', () => {
            type Expected = string;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/false', () => {
            type Expected = string;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/boolean', () => {
            type Expected = string;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings =
            & $ConditionOf<string, number>
            & $AsUnsafe
            & $AsMajority;

          it('should return number for true/true', () => {
            type Expected = number;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/false', () => {
            type Expected = string;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for true/boolean', () => {
            type Expected = string;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/true', () => {
            type Expected = string;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/false', () => {
            type Expected = number;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/boolean', () => {
            type Expected = string;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/true', () => {
            type Expected = string;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/false', () => {
            type Expected = string;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for boolean/boolean', () => {
            type Expected = string;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });

    describe('$AsInverted', () => {
      describe('$AsSafe (default/implied)', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings = $ConditionOf<string, number> & $AsInverted;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for true/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for false/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/true', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/false', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings =
            & $ConditionOf<string, number>
            & $AsInverted
            & $AsMajority;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for true/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for false/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/true', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/false', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string | number for boolean/boolean', () => {
            type Expected = string | number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('$AsUnsafe', () => {
        describe('$AsRunoff (default/implied)', () => {
          type Settings =
            & $ConditionOf<string, number>
            & $AsInverted
            & $AsUnsafe;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/boolean', () => {
            type Expected = number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/boolean', () => {
            type Expected = number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/true', () => {
            type Expected = number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/false', () => {
            type Expected = number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/boolean', () => {
            type Expected = number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('$AsMajority', () => {
          type Settings =
            & $ConditionOf<string, number>
            & $AsInverted
            & $AsUnsafe
            & $AsMajority;

          it('should return string for true/true', () => {
            type Expected = string;
            type Actual = Xor<true, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/false', () => {
            type Expected = number;
            type Actual = Xor<true, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for true/boolean', () => {
            type Expected = number;
            type Actual = Xor<true, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/true', () => {
            type Expected = number;
            type Actual = Xor<false, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return string for false/false', () => {
            type Expected = string;
            type Actual = Xor<false, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for false/boolean', () => {
            type Expected = number;
            type Actual = Xor<false, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/true', () => {
            type Expected = number;
            type Actual = Xor<boolean, true, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/false', () => {
            type Expected = number;
            type Actual = Xor<boolean, false, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });

          it('should return number for boolean/boolean', () => {
            type Expected = number;
            type Actual = Xor<boolean, boolean, Settings>;
            type Result = IsExact<Expected, Actual>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
});
