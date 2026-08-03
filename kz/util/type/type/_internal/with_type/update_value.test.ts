// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsLoose, AsUnified, DefaultOf } from '@kz/util/capability';

import type { UpdateValue } from './update_value.ts';

type TargetType = {
  a: string;
  b: number;
  c: boolean;
};

type Type = {
  d: Date;
  e: symbol;
};

type OfTypeUnion = TargetType | Type;

type OfTypeIntersect = TargetType & Type;

type DefaultType = {
  name: string;
};

//TODO(@ebntly): update tests names to be more descriptive of the behavior being tested, rather than the specific type modifier being used.

describe('UpdateValue', () => {
  describe('no DefaultType', () => {
    describe('AsStrict (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of TargetType and OfType if they do not intersect', () => {
          type Actual = UpdateValue<TargetType, Type>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType and OfType if they intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeUnion>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should extract TargetType from OfType if they intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeIntersect>;
          type Expected = TargetType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType and OfType if they intersect', () => {
          type Actual = UpdateValue<OfTypeUnion, TargetType>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType from OfType if they fully intersect', () => {
          type Actual = UpdateValue<OfTypeIntersect, TargetType>;
          type Expected = TargetType | OfTypeIntersect;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of TargetType and OfType if they do not intersect', () => {
          type Actual = UpdateValue<TargetType, Type, AsUnified>;
          type Expected = OfTypeIntersect;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of TargetType and OfType if they intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeUnion, AsUnified>;
          type Expected = Type & TargetType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never if they fully intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeIntersect, AsUnified>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never if they intersect', () => {
          type Actual = UpdateValue<OfTypeUnion, TargetType, AsUnified>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create an intersection of TargetType from OfType if they fully intersect', () => {
          type Actual = UpdateValue<OfTypeIntersect, TargetType, AsUnified>;
          type Expected = TargetType & OfTypeIntersect;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of TargetType and OfType if they do not intersect', () => {
          type Actual = UpdateValue<TargetType, Type, AsLoose>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType and OfType if they intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeUnion, AsLoose>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should extract TargetType from OfType if they intersect', () => {
          type Actual = UpdateValue<TargetType, OfTypeIntersect, AsLoose>;
          type Expected = TargetType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType and OfType if they intersect', () => {
          type Actual = UpdateValue<OfTypeUnion, TargetType, AsLoose>;
          type Expected = TargetType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of TargetType from OfType if they fully intersect', () => {
          type Actual = UpdateValue<OfTypeIntersect, TargetType, AsLoose>;
          type Expected = TargetType | OfTypeIntersect;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of TargetType and OfType', () => {
          type Actual = UpdateValue<TargetType, Type, AsUnified & AsLoose>;
          type Expected = TargetType & Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of TargetType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeUnion,
            AsUnified & AsLoose
          >;
          type Expected = TargetType & Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of TargetType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeIntersect,
            AsUnified & AsLoose
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never if they intersect', () => {
          type Actual = UpdateValue<
            OfTypeUnion,
            TargetType,
            AsUnified & AsLoose
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create an intersection of TargetType and OfType if they fully intersect', () => {
          type Actual = UpdateValue<
            OfTypeIntersect,
            TargetType,
            AsUnified & AsLoose
          >;
          type Expected = TargetType & Type;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('DefaultOf<DefaultType>', () => {
    describe('AsStrict (default)', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of DefaultType and OfType', () => {
          type Actual = UpdateValue<TargetType, Type, DefaultOf<DefaultType>>;
          type Expected = Type | DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeUnion,
            DefaultOf<DefaultType>
          >;
          type Expected = DefaultType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeIntersect,
            DefaultOf<DefaultType>
          >;
          type Expected = DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the DefaultType if they intersect', () => {
          type Actual = UpdateValue<
            OfTypeUnion,
            TargetType,
            DefaultOf<DefaultType>
          >;
          type Expected = DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of DefaultType and OfType if they fully intersect', () => {
          type Actual = UpdateValue<
            OfTypeIntersect,
            TargetType,
            DefaultOf<DefaultType>
          >;
          type Expected = TargetType | DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            Type,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = Type & DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeUnion,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = Type & DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeIntersect,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never if they intersect', () => {
          type Actual = UpdateValue<
            OfTypeUnion,
            TargetType,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of DefaultType and OfType if they fully intersect', () => {
          type Actual = UpdateValue<
            OfTypeIntersect,
            TargetType,
            AsUnified & DefaultOf<DefaultType>
          >;
          type Expected = TargetType & DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsDistributed (default)', () => {
        it('should create a union of DefaultType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            Type,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeUnion,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType | Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should replace TargetType with DefaultType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeIntersect,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the DefaultType if they intersect', () => {
          type Actual = UpdateValue<
            OfTypeUnion,
            TargetType,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create a union of DefaultType and OfType if they fully intersect', () => {
          type Actual = UpdateValue<
            OfTypeIntersect,
            TargetType,
            AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = TargetType | DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsUnified', () => {
        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            Type,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType & Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create intersection of DefaultType and OfType', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeUnion,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = DefaultType & Type;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never', () => {
          type Actual = UpdateValue<
            TargetType,
            OfTypeIntersect,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never if they intersect', () => {
          type Actual = UpdateValue<
            OfTypeUnion,
            TargetType,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should create an intersection of DefaultType and OfType if they fully intersect', () => {
          type Actual = UpdateValue<
            OfTypeIntersect,
            TargetType,
            AsUnified & AsLoose & DefaultOf<DefaultType>
          >;
          type Expected = TargetType & DefaultType;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
