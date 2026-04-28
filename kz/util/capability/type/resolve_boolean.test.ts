// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments

// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type {
//   AsAsync,
//   AsBuiltin,
//   AsCustom,
//   AsDeep,
//   AsExclude,
//   AsFilter,
//   AsForward,
//   AsGetter,
//   AsImmutable,
//   AsInclude,
//   AsLoose,
//   AsMutable,
//   AsOptional,
//   AsPredicate,
//   AsRequired,
//   AsReversed,
//   AsSafe,
//   AsSetter,
//   AsShallow,
//   AsStrict,
//   AsSync,
//   AsUnsafe,
//   CapSet,
//   Collection,
//   CollectionIdents,
//   CollectionValues,
//   ConditionOf,
//   DefaultOf,
//   Else,
//   AsInverted,
//   IdentsOf,
//   LevelOf,
//   ResolveBoolean,
//   Then,
//   UseAccessor,
//   UseAsync,
//   UseBuiltin,
//   UseCollection,
//   UseCondition,
//   UseDefault,
//   UseDepth,
//   UseElse,
//   UseExclusion,
//   UseInversion,
//   UseIdents,
//   UseImmutable,
//   UseNullOption,
//   UseOptional,
//   UseReverse,
//   UseSafe,
//   UseStream,
//   UseStrict,
//   UseThen,
// } from '@kz/util/capability';

// describe('ResolveBoolean', () => {
//   describe('UseAsync', () => {
//     it('should return UseAsync for UseAsync', () => {
//       type Actual = ResolveBoolean<UseAsync, CapSet>;
//       type Expected = UseAsync;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsAsync for AsAsync', () => {
//       type Actual = ResolveBoolean<AsAsync, CapSet>;
//       type Expected = AsAsync;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsSync for AsSync', () => {
//       type Actual = ResolveBoolean<AsSync, CapSet>;
//       type Expected = AsSync;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseBuiltin', () => {
//     it('should return UseBuiltin for UseBuiltin', () => {
//       type Actual = ResolveBoolean<UseBuiltin, CapSet>;
//       type Expected = UseBuiltin;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsBuiltin for AsBuiltin', () => {
//       type Actual = ResolveBoolean<AsBuiltin, CapSet>;
//       type Expected = AsBuiltin;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsCustom for AsCustom', () => {
//       type Actual = ResolveBoolean<AsCustom, CapSet>;
//       type Expected = AsCustom;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseCollection', () => {
//     it('should return UseCollection for UseCollection', () => {
//       type Actual = ResolveBoolean<UseCollection, CapSet>;
//       type Expected = UseCollection;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return Collection for Collection', () => {
//       type Actual = ResolveBoolean<Collection, CapSet>;
//       type Expected = Collection;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return CollectionIdents for CollectionIdents', () => {
//       type Actual = ResolveBoolean<CollectionIdents, CapSet>;
//       type Expected = CollectionIdents;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return CollectionIdents for CollectionIdents', () => {
//       type Actual = ResolveBoolean<CollectionIdents, CapSet>;
//       type Expected = CollectionIdents;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return CollectionValues for CollectionValues', () => {
//       type Actual = ResolveBoolean<CollectionValues, CapSet>;
//       type Expected = CollectionValues;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseCondition', () => {
//     describe('unAsInvertedped', () => {
//       it('should return UseCondition for UseCondition', () => {
//         type Actual = ResolveBoolean<UseCondition, CapSet>;
//         type Expected = UseCondition;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return ConditionOf<string, number> for ConditionOf<string, number>', () => {
//         type Actual = ResolveBoolean<ConditionOf<string, number>, CapSet>;
//         type Expected = ConditionOf<string, number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return ConditionOf<string, number> for ConditionOf<string, number>', () => {
//         type Actual = ResolveBoolean<ConditionOf<string, number>, CapSet>;
//         type Expected = ConditionOf<string, number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });

//     describe('AsInvertedped', () => {
//       it('should return UseCondition for UseCondition', () => {
//         type Actual = ResolveBoolean<UseCondition & AsInverted, CapSet>;
//         type Expected = UseCondition;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return UseCondition<number, string> for UseCondition<string, number>', () => {
//         type Actual = ResolveBoolean<ConditionOf<string, number> & AsInverted, CapSet>;
//         type Expected = ConditionOf<number, string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return ConditionOf<string, number> for ConditionOf<string, number>', () => {
//         type Actual = ResolveBoolean<
//           ConditionOf<string, number> & AsInverted,
//           CapSet
//         >;
//         type Expected = ConditionOf<number, string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });
//   });

//   describe('UseOptional', () => {
//     it('should return UseOptional for UseOptional', () => {
//       type Actual = ResolveBoolean<UseOptional, CapSet>;
//       type Expected = UseOptional;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsOptional for AsOptional', () => {
//       type Actual = ResolveBoolean<AsOptional, CapSet>;
//       type Expected = AsOptional;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsRequired for AsRequired', () => {
//       type Actual = ResolveBoolean<AsRequired, CapSet>;
//       type Expected = AsRequired;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseDefault', () => {
//     it('should return any for any', () => {
//       type Actual = ResolveBoolean<UseDefault, CapSet>;
//       type Expected = UseDefault;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return DefaultOf<string> for DefaultOf<string>', () => {
//       type Actual = ResolveBoolean<DefaultOf<string>, CapSet>;
//       type Expected = DefaultOf<string>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return DefaultOf<number> for DefaultOf<number>', () => {
//       type Actual = ResolveBoolean<DefaultOf<number>, CapSet>;
//       type Expected = DefaultOf<number>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseDepth', () => {
//     it('should return UseDepth for UseDepth', () => {
//       type Actual = ResolveBoolean<UseDepth, CapSet>;
//       type Expected = UseDepth;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsDeep for AsDeep', () => {
//       type Actual = ResolveBoolean<AsDeep, CapSet>;
//       type Expected = AsDeep;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsShallow for AsShallow', () => {
//       type Actual = ResolveBoolean<AsShallow, CapSet>;
//       type Expected = AsShallow;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<1> for LevelOf<1>', () => {
//       type Actual = ResolveBoolean<LevelOf<1>, CapSet>;
//       type Expected = LevelOf<1>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<2> for LevelOf<2>', () => {
//       type Actual = ResolveBoolean<LevelOf<2>, CapSet>;
//       type Expected = LevelOf<2>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<3> for LevelOf<3>', () => {
//       type Actual = ResolveBoolean<LevelOf<3>, CapSet>;
//       type Expected = LevelOf<3>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<4> for LevelOf<4>', () => {
//       type Actual = ResolveBoolean<LevelOf<4>, CapSet>;
//       type Expected = LevelOf<4>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<5> for LevelOf<5>', () => {
//       type Actual = ResolveBoolean<LevelOf<5>, CapSet>;
//       type Expected = LevelOf<5>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<6> for LevelOf<6>', () => {
//       type Actual = ResolveBoolean<LevelOf<6>, CapSet>;
//       type Expected = LevelOf<6>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<7> for LevelOf<7>', () => {
//       type Actual = ResolveBoolean<LevelOf<7>, CapSet>;
//       type Expected = LevelOf<7>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<8> for LevelOf<8>', () => {
//       type Actual = ResolveBoolean<LevelOf<8>, CapSet>;
//       type Expected = LevelOf<8>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<9> for LevelOf<9>', () => {
//       type Actual = ResolveBoolean<LevelOf<9>, CapSet>;
//       type Expected = LevelOf<9>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return LevelOf<10> for LevelOf<10>', () => {
//       type Actual = ResolveBoolean<LevelOf<10>, CapSet>;
//       type Expected = LevelOf<10>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseReverse', () => {
//     it('should return UseReverse for UseReverse', () => {
//       type Actual = ResolveBoolean<UseReverse, CapSet>;
//       type Expected = UseReverse;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsReversed for AsReversed', () => {
//       type Actual = ResolveBoolean<AsReversed, CapSet>;
//       type Expected = AsReversed;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsForward for AsForward', () => {
//       type Actual = ResolveBoolean<AsForward, CapSet>;
//       type Expected = AsForward;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseElse', () => {
//     describe('unAsInvertedped', () => {
//       it('should return UseElse for UseElse', () => {
//         type Actual = ResolveBoolean<UseElse, CapSet>;
//         type Expected = UseElse;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Else<string> for Else<string>', () => {
//         type Actual = ResolveBoolean<Else<string>, CapSet>;
//         type Expected = Else<string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Else<number> for Else<number>', () => {
//         type Actual = ResolveBoolean<Else<number>, CapSet>;
//         type Expected = Else<number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });

//     describe('AsInvertedped', () => {
//       it('should return UseThen for UseElse', () => {
//         type Actual = ResolveBoolean<UseElse & AsInverted, CapSet>;
//         type Expected = UseThen;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Then<string> for Else<string>', () => {
//         type Actual = ResolveBoolean<Else<string> & AsInverted, CapSet>;
//         type Expected = Then<string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Then<number> for Else<number>', () => {
//         type Actual = ResolveBoolean<Else<number> & AsInverted, CapSet>;
//         type Expected = Then<number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });
//   });

//   describe('UseExclusion', () => {
//     it('should return UseExclusion for UseExclusion', () => {
//       type Actual = ResolveBoolean<UseExclusion, CapSet>;
//       type Expected = UseExclusion;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsExclude for AsExclude', () => {
//       type Actual = ResolveBoolean<AsExclude, CapSet>;
//       type Expected = AsExclude;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsInclude for AsInclude', () => {
//       type Actual = ResolveBoolean<AsInclude, CapSet>;
//       type Expected = AsInclude;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseStream', () => {
//     it('should return UseStream for UseStream', () => {
//       type Actual = ResolveBoolean<UseStream, CapSet>;
//       type Expected = UseStream;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsFilter for AsFilter', () => {
//       type Actual = ResolveBoolean<AsFilter, CapSet>;
//       type Expected = AsFilter;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsPredicate for AsPredicate', () => {
//       type Actual = ResolveBoolean<AsPredicate, CapSet>;
//       type Expected = AsPredicate;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseInversion', () => {
//     it('should return UseInversion for UseInversion', () => {
//       type Actual = ResolveBoolean<UseInversion, CapSet>;
//       type Expected = UseInversion;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsInverted for AsInverted', () => {
//       type Actual = ResolveBoolean<AsInverted, CapSet>;
//       type Expected = UseNullOption;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseIdents', () => {
//     type Type = {
//       first: string;
//       last: string;
//       age: number;
//     };

//     it('should return UseIdents for UseIdents', () => {
//       type Actual = ResolveBoolean<UseIdents, CapSet>;
//       type Expected = UseIdents;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it("should return IdentsOf<Type, 'first' | 'last'> for IdentsOf<Type, 'first' | 'last'>", () => {
//       type Actual = ResolveBoolean<IdentsOf<Type, 'first' | 'last'>, CapSet>;
//       type Expected = IdentsOf<Type, 'first' | 'last'>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it("should return IdentsOf<Type, 'age'> for IdentsOf<Type, 'age'>", () => {
//       type Actual = ResolveBoolean<IdentsOf<Type, 'age'>, CapSet>;
//       type Expected = IdentsOf<Type, 'age'>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseImmutable', () => {
//     it('should return UseImmutable for UseImmutable', () => {
//       type Actual = ResolveBoolean<UseImmutable, CapSet>;
//       type Expected = UseImmutable;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsImmutable for AsImmutable', () => {
//       type Actual = ResolveBoolean<AsImmutable, CapSet>;
//       type Expected = AsImmutable;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsMutable for AsMutable', () => {
//       type Actual = ResolveBoolean<AsMutable, CapSet>;
//       type Expected = AsMutable;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseSafe', () => {
//     it('should return UseSafe for UseSafe', () => {
//       type Actual = ResolveBoolean<UseSafe, CapSet>;
//       type Expected = UseSafe;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsSafe for AsSafe', () => {
//       type Actual = ResolveBoolean<AsSafe, CapSet>;
//       type Expected = AsSafe;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsUnsafe for AsUnsafe', () => {
//       type Actual = ResolveBoolean<AsUnsafe, CapSet>;
//       type Expected = AsUnsafe;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseAccessor', () => {
//     it('should return UseAccessor for UseAccessor', () => {
//       type Actual = ResolveBoolean<UseAccessor, CapSet>;
//       type Expected = UseAccessor;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsSetter for AsSetter', () => {
//       type Actual = ResolveBoolean<AsSetter, CapSet>;
//       type Expected = AsSetter;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsGetter for AsGetter', () => {
//       type Actual = ResolveBoolean<AsGetter, CapSet>;
//       type Expected = AsGetter;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseStrict', () => {
//     it('should return UseStrict for UseStrict', () => {
//       type Actual = ResolveBoolean<UseStrict, CapSet>;
//       type Expected = UseStrict;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsStrict for AsStrict', () => {
//       type Actual = ResolveBoolean<AsStrict, CapSet>;
//       type Expected = AsStrict;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return AsLoose for AsLoose', () => {
//       type Actual = ResolveBoolean<AsLoose, CapSet>;
//       type Expected = AsLoose;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('UseThen', () => {
//     describe('unAsInvertedped', () => {
//       it('should return UseThen for UseThen', () => {
//         type Actual = ResolveBoolean<UseThen, CapSet>;
//         type Expected = UseThen;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Then<string> for Then<string>', () => {
//         type Actual = ResolveBoolean<Then<string>, CapSet>;
//         type Expected = Then<string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Then<number> for Then<number>', () => {
//         type Actual = ResolveBoolean<Then<number>, CapSet>;
//         type Expected = Then<number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });

//     describe('AsInvertedped', () => {
//       it('should return UseElse for UseThen', () => {
//         type Actual = ResolveBoolean<UseThen & AsInverted, CapSet>;
//         type Expected = UseElse;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Else<string> for Then<string>', () => {
//         type Actual = ResolveBoolean<Then<string> & AsInverted, CapSet>;
//         type Expected = Else<string>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Else<number> for Then<number>', () => {
//         type Actual = ResolveBoolean<Then<number> & AsInverted, CapSet>;
//         type Expected = Else<number>;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });
//   });
// });
