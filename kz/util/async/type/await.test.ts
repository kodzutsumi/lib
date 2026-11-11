// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments

// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { Await } from '@kz/util/async';
// import type {
//   AsBuiltin,
//   AsCondition,
//   AsRequired,
//   AsRequired,
//   ConditionOf,
//   Else,
//   Then,
// } from '@kz/util/capability';
// import type { MaybeNil, Nil } from '@kz/util/type';

// describe('Await', () => {
//   describe('Defaults', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return never', () => {
//       type Actual = Await<string>;
//       type Expected = never;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsBuiltin', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, AsBuiltin>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return never', () => {
//       type Actual = Await<string, AsBuiltin>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, AsBuiltin & Then<number>>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the initial type', () => {
//       type Actual = Await<string, AsBuiltin>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return null', () => {
//       type Actual = Await<null, AsBuiltin>;
//       type Expected = null;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return undefined', () => {
//       type Actual = Await<undefined, AsBuiltin>;
//       type Expected = undefined;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return Nil', () => {
//       type Actual = Await<Nil, AsBuiltin>;
//       type Expected = Nil;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the initial type', () => {
//       type Actual = Await<MaybeNil<string>, AsBuiltin>;
//       type Expected = MaybeNil<string>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsRequired', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, AsRequired>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return never', () => {
//       type Actual = Await<string, AsRequired>;
//       type Expected = never;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsRequired', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, AsRequired>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the initial type', () => {
//       type Actual = Await<string, AsRequired>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Then<number> (AsRequired)', () => {
//     it('should return the Then type', () => {
//       type Actual = Await<Promise<string>, Then<number>>;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return never', () => {
//       type Actual = Await<string, Then<number>>;
//       type Expected = never;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Else<boolean> (AsRequired)', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, Else<boolean>>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = Await<string, Else<boolean>>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsCondition (AsRequired)', () => {
//     it('should return true', () => {
//       type Actual = Await<Promise<string>, AsCondition>;
//       type Expected = true;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return false', () => {
//       type Actual = Await<string, AsCondition>;
//       type Expected = false;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('ConditionOf<number, boolean> (AsRequired)', () => {
//     it('should return the Then type', () => {
//       type Actual = Await<Promise<string>, ConditionOf<number, boolean>>;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = Await<string, ConditionOf<number, boolean>>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Then<number> & AsRequired', () => {
//     it('should return the Then type', () => {
//       type Actual = Await<Promise<string>, Then<number> & AsRequired>;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return never', () => {
//       type Actual = Await<string, Then<number> & AsRequired>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Else<boolean> & AsRequired', () => {
//     it('should return the awaited type', () => {
//       type Actual = Await<Promise<string>, Else<boolean> & AsRequired>;
//       type Expected = string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = Await<string, Else<boolean> & AsRequired>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsCondition & AsRequired', () => {
//     it('should return true', () => {
//       type Actual = Await<
//         Promise<string>,
//         AsCondition & AsRequired
//       >;
//       type Expected = true;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return false', () => {
//       type Actual = Await<string, AsCondition & AsRequired>;
//       type Expected = false;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('ConditionOf<number, boolean> & AsRequired', () => {
//     it('should return the Then type', () => {
//       type Actual = Await<
//         Promise<string>,
//         ConditionOf<number, boolean> & AsRequired
//       >;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = Await<string, ConditionOf<number, boolean> & AsRequired>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });
// });
