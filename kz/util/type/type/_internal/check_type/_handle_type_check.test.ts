import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Any, Nil } from '@kz/util/type';

import type { _CheckSpecial } from './_check_special.ts';
import type { _HandleTypeCheck } from './_handle_type_check.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;
/**
 * Tests routing of "special" and "ordinary" types.
 */
describe('_HandleTypeCheck', () => {
  describe('$AsLoose (default)', () => {
    describe('$AsDistributed (default)', () => {
      describe('TargetType: any', () => {
        type TargetType = AnyType;

        describe('Type: any', () => {
          type Type = AnyType;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = {
            a: number;
            b: string;
            c: boolean;
          };

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
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
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = {
            a: number;
            b: string;
            c: boolean;
          };

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
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
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: unknown', () => {
          type Type = unknown;

          it('should return false', () => {
            type Expected = false;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: never', () => {
          type Type = never;

          it('should return true', () => {
            type Expected = true;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: void', () => {
          type Type = void;

          it('should return false', () => {
            type Expected = false;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: string', () => {
          type Type = string;

          it('should return false', () => {
            type Expected = false;
            
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: Nil', () => {
          type Type = Nil;

          it('should return false', () => {
            type Expected = false;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });

        describe('Type: object', () => {
          type Type = {
            a: number;
            b: string;
            c: boolean;
          };

          it('should return false', () => {
            type Expected = false;
            type Actual = _HandleTypeCheck<TargetType, Type>;
            type Result = IsExact<Actual, Expected>;

            assertType<Result>(IS_TRUE);
          });
        });
      });
    });
  });
});
