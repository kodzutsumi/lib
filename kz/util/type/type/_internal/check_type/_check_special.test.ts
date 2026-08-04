import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Any, Nil } from '@kz/util/type';
import type {
  $AsDistributed,
  $AsForward,
  $AsReversed,
  $AsUnified,
} from '@kz/util/capability';

import type { _CheckSpecial } from './_check_special.ts';

type AnyType = Any<'i11n#testing'>;
type ObjectType = {
  firstName: string;
  lastName: string;
  office: number;
};

const IS_TRUE = true;

describe('_CheckSpecial', () => {
  describe('$AsForward (default/implied)', () => {
    describe('$AsDistributed (default/implied)', () => {
      type Settings = $AsForward & $AsDistributed;

      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
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
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = ObjectType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _CheckSpecial<TargetType, Type, Settings>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
});
