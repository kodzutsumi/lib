// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type {
  AccessorKey,
  AsAsync,
  AsBuiltin,
  AsCustom,
  AsDeep,
  AsExclude,
  AsFilter,
  AsForward,
  AsGetter,
  AsImmutable,
  AsInclude,
  AsInverted,
  AsLoose,
  AsMutable,
  AsOptional,
  AsPredicate,
  AsRequired,
  AsReversed,
  AsSafe,
  AsSetter,
  AsShallow,
  AsStrict,
  AsSync,
  AsUnsafe,
  AsyncKey,
  BuiltinKey,
  Collection,
  CollectionIdents,
  CollectionKey,
  CollectionTarget,
  CollectionValues,
  DefaultKey,
  DefaultOf,
  DepthKey,
  Else,
  ElseKey,
  ExclusionKey,
  GetCap,
  IdentsKey,
  IdentsOf,
  ImmutableKey,
  InversionKey,
  LevelOf,
  OptionalKey,
  ReverseKey,
  SafeKey,
  StreamKey,
  StrictKey,
  Then,
  ThenKey,
  UseAccessor,
  UseAsync,
  UseBuiltin,
  UseCollection,
  UseDefault,
  UseDepth,
  UseElse,
  UseExclusion,
  UseIdents,
  UseImmutable,
  UseInversion,
  UseOptional,
  UseReverse,
  UseSafe,
  UseStream,
  UseStrict,
  UseThen,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

describe('GetCap', () => {
  describe('UseAsync', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseAsync, AsyncKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsAsync', () => {
      type Actual = GetCap<AsAsync, AsyncKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsSync', () => {
      type Actual = GetCap<AsSync, AsyncKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, AsyncKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseBuiltin', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseBuiltin, BuiltinKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsBuiltin', () => {
      type Actual = GetCap<AsBuiltin, BuiltinKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsCustom', () => {
      type Actual = GetCap<AsCustom, BuiltinKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, BuiltinKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseCollection', () => {
    it('should return CollectionTarget for signature', () => {
      type Actual = GetCap<UseCollection, CollectionKey, 'collection'>;
      type Expected = CollectionTarget;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return CollectionTarget for Collection', () => {
      type Actual = GetCap<Collection, CollectionKey, 'values'>;
      type Expected = 'collection';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return idents for CollectionIdents', () => {
      type Actual = GetCap<CollectionIdents, CollectionKey, 'collection'>;
      type Expected = 'idents';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return values for CollectionValues', () => {
      type Actual = GetCap<CollectionValues, CollectionKey, 'collection'>;
      type Expected = 'values';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, CollectionKey, 'collection'>;
      type Expected = 'collection';

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseOptional', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseOptional, OptionalKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsOptional', () => {
      type Actual = GetCap<AsOptional, OptionalKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsRequired', () => {
      type Actual = GetCap<AsRequired, OptionalKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, OptionalKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseDefault', () => {
    it('should return any for signature', () => {
      type Actual = GetCap<UseDefault, DefaultKey, number>;
      type Expected = Any<'i11n#testing'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string for DefaultOf<string>', () => {
      type Actual = GetCap<DefaultOf<string>, DefaultKey, number>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return number for DefaultOf<number>', () => {
      type Actual = GetCap<DefaultOf<number>, DefaultKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, DefaultKey, 6>;
      type Expected = 6;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseDepth', () => {
    it('should return boolean | DepthLevel for signature', () => {
      type Actual = GetCap<UseDepth, DepthKey, 2>;
      type Expected = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsDeep', () => {
      type Actual = GetCap<AsDeep, DepthKey, 2>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsShallow', () => {
      type Actual = GetCap<AsShallow, DepthKey, 2>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 1 for LevelOf<1>', () => {
      type Actual = GetCap<LevelOf<1>, DepthKey, 2>;
      type Expected = 1;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 2 for LevelOf<2>', () => {
      type Actual = GetCap<LevelOf<2>, DepthKey, 2>;
      type Expected = 2;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 3 for LevelOf<3>', () => {
      type Actual = GetCap<LevelOf<3>, DepthKey, 2>;
      type Expected = 3;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 4 for LevelOf<4>', () => {
      type Actual = GetCap<LevelOf<4>, DepthKey, 2>;
      type Expected = 4;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 5 for LevelOf<5>', () => {
      type Actual = GetCap<LevelOf<5>, DepthKey, 2>;
      type Expected = 5;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 6 for LevelOf<6>', () => {
      type Actual = GetCap<LevelOf<6>, DepthKey, 2>;
      type Expected = 6;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 7 for LevelOf<7>', () => {
      type Actual = GetCap<LevelOf<7>, DepthKey, 2>;
      type Expected = 7;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 8 for LevelOf<8>', () => {
      type Actual = GetCap<LevelOf<8>, DepthKey, 2>;
      type Expected = 8;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 9 for LevelOf<9>', () => {
      type Actual = GetCap<LevelOf<9>, DepthKey, 2>;
      type Expected = 9;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 10 for LevelOf<10>', () => {
      type Actual = GetCap<LevelOf<10>, DepthKey, 2>;
      type Expected = 10;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, DefaultKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseReverse', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseReverse, ReverseKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsReversed', () => {
      type Actual = GetCap<AsReversed, ReverseKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsForward', () => {
      type Actual = GetCap<AsForward, ReverseKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, ReverseKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseElse', () => {
    it('should return any for signature', () => {
      type Actual = GetCap<UseElse, ElseKey, number>;
      type Expected = Any<'i11n#testing'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string for Else<string>', () => {
      type Actual = GetCap<Else<string>, ElseKey, number>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return number for Else<number>', () => {
      type Actual = GetCap<Else<number>, ElseKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, ElseKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseExclusion', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseExclusion, ExclusionKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsExclude', () => {
      type Actual = GetCap<AsExclude, ExclusionKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsInclude', () => {
      type Actual = GetCap<AsInclude, ExclusionKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, ExclusionKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseStream', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseStream, StreamKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsFilter', () => {
      type Actual = GetCap<AsFilter, StreamKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsPredicate', () => {
      type Actual = GetCap<AsPredicate, StreamKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, StreamKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('InversionKey', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseInversion, InversionKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsInverted', () => {
      type Actual = GetCap<AsInverted, InversionKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, InversionKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseIdents', () => {
    type Type = {
      first: string;
      last: string;
      age: number;
    };

    it('should return PropertyKey for signature', () => {
      type Actual = GetCap<UseIdents, IdentsKey, number>;
      type Expected = PropertyKey;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return 'first' | 'last' for IdentsOf<Type, 'first' | 'last'>", () => {
      type Actual = GetCap<IdentsOf<Type, 'first' | 'last'>, IdentsKey, number>;
      type Expected = 'first' | 'last';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return 'age' for IdentsOf<Type, 'age'>", () => {
      type Actual = GetCap<IdentsOf<Type, 'age'>, IdentsKey, number>;
      type Expected = 'age';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, IdentsKey, string>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseImmutable', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseImmutable, ImmutableKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsImmutable', () => {
      type Actual = GetCap<AsImmutable, ImmutableKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsMutable', () => {
      type Actual = GetCap<AsMutable, ImmutableKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, ImmutableKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseSafe', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseSafe, SafeKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsSafe', () => {
      type Actual = GetCap<AsSafe, SafeKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsUnsafe', () => {
      type Actual = GetCap<AsUnsafe, SafeKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, SafeKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseAccessor', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseAccessor, AccessorKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsSetter', () => {
      type Actual = GetCap<AsSetter, AccessorKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsGetter', () => {
      type Actual = GetCap<AsGetter, AccessorKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, AccessorKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseStrict', () => {
    it('should return boolean for signature', () => {
      type Actual = GetCap<UseStrict, StrictKey, false>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsStrict', () => {
      type Actual = GetCap<AsStrict, StrictKey, false>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false for AsLoose', () => {
      type Actual = GetCap<AsLoose, StrictKey, true>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsMutable, StrictKey, true>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseThen', () => {
    it('should return any for signature', () => {
      type Actual = GetCap<UseThen, ThenKey, number>;
      type Expected = Any<'i11n#testing'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string for Then<string>', () => {
      type Actual = GetCap<Then<string>, ThenKey, number>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return number for Then<number>', () => {
      type Actual = GetCap<Then<number>, ThenKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = GetCap<AsStrict, ThenKey, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
