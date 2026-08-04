import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsDistributed,
  $AsForward,
  $AsReversed,
  $AsUnified,
} from '@kz/util/capability';

import type { Any } from '../../any.ts';
import type { Nil } from '../../nil.ts';

import type { _CheckOrdinary } from './_check_ordinary.ts';

type AnyType = Any<'i11n#testing'>;
type ObjectType = {
  firstName: string;
  lastName: string;
  office: number;
};

const IS_TRUE = true;
//FIX(@ebntly) Fix the defaults and test results
describe('_CheckOrdinary', () => {
  describe('$AsForward (default/implied)', () => {
    describe('$AsDistributed (default/implied)', () => {
      type Settings = $AsForward & $AsDistributed;

      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: unknown', () => {
        type TargetType = unknown;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: never', () => {
        type TargetType = never;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: void', () => {
        type TargetType = void;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: string', () => {
        type TargetType = string;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: Nil', () => {
        type TargetType = Nil;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: object', () => {
        type TargetType = ObjectType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
    
    describe('$AsUnified', () => {
      type Settings = $AsForward & $AsUnified;

      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: unknown', () => {
        type TargetType = unknown;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: never', () => {
        type TargetType = never;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: void', () => {
        type TargetType = void;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: string', () => {
        type TargetType = string;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: Nil', () => {
        type TargetType = Nil;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: object', () => {
        type TargetType = ObjectType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
  
  describe('$AsReversed', () => {
    describe('$AsDistributed (default/implied)', () => {
      type Settings = $AsReversed & $AsDistributed;

      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: unknown', () => {
        type TargetType = unknown;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: never', () => {
        type TargetType = never;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: void', () => {
        type TargetType = void;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: string', () => {
        type TargetType = string;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: Nil', () => {
        type TargetType = Nil;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: object', () => {
        type TargetType = ObjectType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
    
    describe('$AsUnified', () => {
      type Settings = $AsReversed & $AsUnified;

      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: unknown', () => {
        type TargetType = unknown;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: never', () => {
        type TargetType = never;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: void', () => {
        type TargetType = void;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: string', () => {
        type TargetType = string;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: Nil', () => {
        type TargetType = Nil;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });

      describe('TargetType: object', () => {
        type TargetType = ObjectType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckOrdinary<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
});
