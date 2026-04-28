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
  CollectionValues,
  DefaultKey,
  DefaultOf,
  DepthKey,
  Else,
  ElseKey,
  ExclusionKey,
  IdentsKey,
  IdentsOf,
  ImmutableKey,
  InversionKey,
  LevelOf,
  OptionalKey,
  PickCap,
  ReferenceTypeKey,
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

describe('PickCap', () => {
  describe('UseAsync', () => {
    it('should return UseAsync for signature', () => {
      type Actual = PickCap<UseAsync, AsyncKey, false>;
      type Expected = UseAsync;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsAsync for AsAsync', () => {
      type Actual = PickCap<AsAsync, AsyncKey, false>;
      type Expected = AsAsync;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsSync for AsSync', () => {
      type Actual = PickCap<AsSync, AsyncKey, true>;
      type Expected = AsSync;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, AsyncKey, true>;
      type Expected = AsAsync;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseBuiltin', () => {
    it('should return UseBuiltin for signature', () => {
      type Actual = PickCap<UseBuiltin, BuiltinKey, false>;
      type Expected = UseBuiltin;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsBuiltin for AsBuiltin', () => {
      type Actual = PickCap<AsBuiltin, BuiltinKey, false>;
      type Expected = AsBuiltin;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsCustom for AsCustom', () => {
      type Actual = PickCap<AsCustom, BuiltinKey, true>;
      type Expected = AsCustom;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, BuiltinKey, true>;
      type Expected = AsBuiltin;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseCollection', () => {
    it('should return UseCollection for signature', () => {
      type Actual = PickCap<UseCollection, CollectionKey, 'collection'>;
      type Expected = UseCollection;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Collection for Collection', () => {
      type Actual = PickCap<Collection, CollectionKey, 'values'>;
      type Expected = Collection;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return CollectionIdents for CollectionIdents', () => {
      type Actual = PickCap<CollectionIdents, CollectionKey, 'collection'>;
      type Expected = CollectionIdents;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return CollectionValues for CollectionValues', () => {
      type Actual = PickCap<CollectionValues, CollectionKey, 'collection'>;
      type Expected = CollectionValues;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, CollectionKey, 'collection'>;
      type Expected = Collection;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseOptional', () => {
    it('should return UseOptional for signature', () => {
      type Actual = PickCap<UseOptional, OptionalKey, false>;
      type Expected = UseOptional;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsOptional for AsOptional', () => {
      type Actual = PickCap<AsOptional, OptionalKey, false>;
      type Expected = AsOptional;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsRequired for AsRequired', () => {
      type Actual = PickCap<AsRequired, OptionalKey, true>;
      type Expected = AsRequired;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, OptionalKey, true>;
      type Expected = AsOptional;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseDefault', () => {
    it('should return any for signature', () => {
      type Actual = PickCap<UseDefault, DefaultKey, number>;
      type Expected = UseDefault;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return DefaultOf<string> for DefaultOf<string>', () => {
      type Actual = PickCap<DefaultOf<string>, DefaultKey, number>;
      type Expected = DefaultOf<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return DefaultOf<number> for DefaultOf<number>', () => {
      type Actual = PickCap<DefaultOf<number>, DefaultKey, number>;
      type Expected = DefaultOf<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, DefaultKey, number>;
      type Expected = DefaultOf<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseDepth', () => {
    it('should return UseDepth for signature', () => {
      type Actual = PickCap<UseDepth, DepthKey, 2>;
      type Expected = UseDepth;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsDeep for AsDeep', () => {
      type Actual = PickCap<AsDeep, DepthKey, 2>;
      type Expected = AsDeep;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsShallow for AsShallow', () => {
      type Actual = PickCap<AsShallow, DepthKey, 2>;
      type Expected = AsShallow;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<1> for LevelOf<1>', () => {
      type Actual = PickCap<LevelOf<1>, DepthKey, 2>;
      type Expected = LevelOf<1>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<2> for LevelOf<2>', () => {
      type Actual = PickCap<LevelOf<2>, DepthKey, 2>;
      type Expected = LevelOf<2>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<3> for LevelOf<3>', () => {
      type Actual = PickCap<LevelOf<3>, DepthKey, 2>;
      type Expected = LevelOf<3>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<4> for LevelOf<4>', () => {
      type Actual = PickCap<LevelOf<4>, DepthKey, 2>;
      type Expected = LevelOf<4>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<5> for LevelOf<5>', () => {
      type Actual = PickCap<LevelOf<5>, DepthKey, 2>;
      type Expected = LevelOf<5>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<6> for LevelOf<6>', () => {
      type Actual = PickCap<LevelOf<6>, DepthKey, 2>;
      type Expected = LevelOf<6>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<7> for LevelOf<7>', () => {
      type Actual = PickCap<LevelOf<7>, DepthKey, 2>;
      type Expected = LevelOf<7>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<8> for LevelOf<8>', () => {
      type Actual = PickCap<LevelOf<8>, DepthKey, 2>;
      type Expected = LevelOf<8>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<9> for LevelOf<9>', () => {
      type Actual = PickCap<LevelOf<9>, DepthKey, 2>;
      type Expected = LevelOf<9>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<10> for LevelOf<10>', () => {
      type Actual = PickCap<LevelOf<10>, DepthKey, 2>;
      type Expected = LevelOf<10>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, DepthKey, 6>;
      type Expected = LevelOf<6>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseReverse', () => {
    it('should return UseReverse for signature', () => {
      type Actual = PickCap<UseReverse, ReverseKey, false>;
      type Expected = UseReverse;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsReversed for AsReversed', () => {
      type Actual = PickCap<AsReversed, ReverseKey, false>;
      type Expected = AsReversed;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsForward for AsForward', () => {
      type Actual = PickCap<AsForward, ReverseKey, true>;
      type Expected = AsForward;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, ReverseKey, true>;
      type Expected = AsReversed;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseElse', () => {
    it('should return UseElse for signature', () => {
      type Actual = PickCap<UseElse, ElseKey, number>;
      type Expected = UseElse;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Else<string> for Else<string>', () => {
      type Actual = PickCap<Else<string>, ElseKey, number>;
      type Expected = Else<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Else<number> for Else<number>', () => {
      type Actual = PickCap<Else<number>, ElseKey, number>;
      type Expected = Else<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, ElseKey, number>;
      type Expected = Else<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseExclusion', () => {
    it('should return UseExclusion for signature', () => {
      type Actual = PickCap<UseExclusion, ExclusionKey, false>;
      type Expected = UseExclusion;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsExclude for AsExclude', () => {
      type Actual = PickCap<AsExclude, ExclusionKey, false>;
      type Expected = AsExclude;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsInclude for AsInclude', () => {
      type Actual = PickCap<AsInclude, ExclusionKey, true>;
      type Expected = AsInclude;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, ExclusionKey, true>;
      type Expected = AsExclude;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseStream', () => {
    it('should return UseStream for signature', () => {
      type Actual = PickCap<UseStream, StreamKey, false>;
      type Expected = UseStream;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsFilter for AsFilter', () => {
      type Actual = PickCap<AsFilter, StreamKey, false>;
      type Expected = AsFilter;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsPredicate for AsPredicate', () => {
      type Actual = PickCap<AsPredicate, StreamKey, true>;
      type Expected = AsPredicate;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, StreamKey, true>;
      type Expected = AsFilter;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseInversion', () => {
    it('should return UseInversion for signature', () => {
      type Actual = PickCap<UseInversion, InversionKey, false>;
      type Expected = UseInversion;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsInverted for AsInverted', () => {
      type Actual = PickCap<AsInverted, InversionKey, false>;
      type Expected = AsInverted;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, InversionKey, true>;
      type Expected = AsInverted;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseIdents', () => {
    type Type = {
      first: string;
      last: string;
      age: number;
    };

    it('should return UseIdents for signature', () => {
      type Actual = PickCap<UseIdents, IdentsKey, number>;
      type Expected = Omit<UseIdents, ReferenceTypeKey>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return IdentsOf<Type, 'first' | 'last'> for IdentsOf<Type, 'first' | 'last'>", () => {
      type Actual = PickCap<
        IdentsOf<Type, 'first' | 'last'>,
        IdentsKey,
        number
      >;
      type Expected = Omit<IdentsOf<Type, 'first' | 'last'>, ReferenceTypeKey>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return IdentsOf<Type, 'age'> for IdentsOf<Type, 'age'>", () => {
      type Actual = PickCap<IdentsOf<Type, 'age'>, IdentsKey, number>;
      type Expected = Omit<IdentsOf<Type, 'age'>, ReferenceTypeKey>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, IdentsKey, 'age'>;
      type Expected = Omit<IdentsOf<Type, 'age'>, ReferenceTypeKey>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseImmutable', () => {
    it('should return UseImmutable for signature', () => {
      type Actual = PickCap<UseImmutable, ImmutableKey, false>;
      type Expected = UseImmutable;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsImmutable for AsImmutable', () => {
      type Actual = PickCap<AsImmutable, ImmutableKey, false>;
      type Expected = AsImmutable;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsMutable for AsMutable', () => {
      type Actual = PickCap<AsMutable, ImmutableKey, true>;
      type Expected = AsMutable;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, ImmutableKey, true>;
      type Expected = AsImmutable;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseSafe', () => {
    it('should return UseSafe for signature', () => {
      type Actual = PickCap<UseSafe, SafeKey, false>;
      type Expected = UseSafe;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsSafe for AsSafe', () => {
      type Actual = PickCap<AsSafe, SafeKey, false>;
      type Expected = AsSafe;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsUnsafe for AsUnsafe', () => {
      type Actual = PickCap<AsUnsafe, SafeKey, true>;
      type Expected = AsUnsafe;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, SafeKey, true>;
      type Expected = AsSafe;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseAccessor', () => {
    it('should return UseAccessor for signature', () => {
      type Actual = PickCap<UseAccessor, AccessorKey, false>;
      type Expected = UseAccessor;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsSetter for AsSetter', () => {
      type Actual = PickCap<AsSetter, AccessorKey, false>;
      type Expected = AsSetter;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsGetter for AsGetter', () => {
      type Actual = PickCap<AsGetter, AccessorKey, true>;
      type Expected = AsGetter;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, AccessorKey, true>;
      type Expected = AsSetter;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseStrict', () => {
    it('should return UseStrict for signature', () => {
      type Actual = PickCap<UseStrict, StrictKey, false>;
      type Expected = UseStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsStrict for AsStrict', () => {
      type Actual = PickCap<AsStrict, StrictKey, false>;
      type Expected = AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsLoose for AsLoose', () => {
      type Actual = PickCap<AsLoose, StrictKey, true>;
      type Expected = AsLoose;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsMutable, StrictKey, true>;
      type Expected = AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseThen', () => {
    it('should return UseThen for signature', () => {
      type Actual = PickCap<UseThen, ThenKey, number>;
      type Expected = UseThen;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Then<string> for Then<string>', () => {
      type Actual = PickCap<Then<string>, ThenKey, number>;
      type Expected = Then<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Then<number> for Then<number>', () => {
      type Actual = PickCap<Then<number>, ThenKey, number>;
      type Expected = Then<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default when missing', () => {
      type Actual = PickCap<AsStrict, ThenKey, number>;
      type Expected = Then<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
