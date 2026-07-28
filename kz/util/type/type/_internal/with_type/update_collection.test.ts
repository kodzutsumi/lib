// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsLoose, AsUnified, DefaultOf } from '@kz/util/capability';

import type { Scalar } from '../../scalar.ts';

import type { UpdateCollection } from './update_collection.ts';

type OfType = {
  a: string;
  b: number;
  c: boolean;
  d: Scalar;
  e: Date;
};

type TargetType = string;
type DefaultType = Error;

//TODO(@ebntly): update tests names to be more descriptive of the behavior being tested, rather than the specific type modifier being used.

describe('UpdateCollection', () => {
  describe('no DefaultType', () => {
    describe('AsStrict (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of TargetType and OfType[Key] if they do not intersect', () => {
          type Actual = UpdateCollection<TargetType, OfType>;
          type Expected = {
            [K in keyof OfType]: TargetType | OfType[K];
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should overwrite if they intersect and unionize if they do not', () => {
          type Actual = UpdateCollection<Scalar, OfType>;
          type Expected = {
            [K in keyof OfType]: Scalar extends OfType[K] ? Scalar
              : Scalar | OfType[K];
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of TargetType and OfType if they do not intersect', () => {
          type Actual = UpdateCollection<TargetType, OfType, AsUnified>;
          type Expected = {
            [K in keyof OfType]: TargetType & Exclude<OfType[K], TargetType>;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of TargetType and OfType if they intersect', () => {
          type Actual = UpdateCollection<Scalar, OfType, AsUnified>;
          type Expected = {
            [K in keyof OfType]: Scalar & Exclude<OfType[K], Scalar>;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of TargetType and OfType if they do not intersect', () => {
          type Actual = UpdateCollection<TargetType, OfType, AsLoose>;
          type Expected = {
            [K in keyof OfType]: TargetType | OfType[K];
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType and OfType if they intersect', () => {
          type Actual = UpdateCollection<Scalar, OfType, AsLoose>;
          type Expected = {
            [K in keyof OfType]: Scalar | OfType[K];
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of TargetType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & AsLoose
          >;
          type Expected = {
            [K in keyof OfType]: TargetType & Exclude<OfType[K], TargetType>;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of TargetType and OfType', () => {
          type Actual = UpdateCollection<Scalar, OfType, AsUnified & AsLoose>;
          type Expected = {
            [K in keyof OfType]: Scalar & Exclude<OfType[K], Scalar>;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('DefaultOf<DefaultType>', () => {
    describe('AsStrict (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of DefaultType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> | DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateCollection<
            Scalar,
            OfType,
            DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], Scalar> | DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> & DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> & DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: OfType[K] extends TargetType ? never
              : Exclude<OfType[K], TargetType> & DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of DefaultType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> | DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateCollection<
            Scalar,
            OfType,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], Scalar> | DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> & DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateCollection<
            TargetType,
            OfType,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = {
            [K in keyof OfType]: Exclude<OfType[K], TargetType> & DefaultType;
          };

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
