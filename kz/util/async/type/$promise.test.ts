// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments

// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { $Promise } from '@kz/util/async';
// import type {
//   AsBuiltin,
//   AsOptional,
//   AsCondition,
//   AsRequired,
//   ConditionOf,
//   Else,
//   Then,
// } from '@kz/util/capability';

// describe('Await', () => {
//   describe('Defaults', () => {
//     it('should return a Promise', () => {
//       type Actual = $Promise<string>;
//       type Expected = Promise<string>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsBuiltin', () => {
//     it('should return a Promise', () => {
//       type Actual = $Promise<string, AsBuiltin>;
//       type Expected = Promise<string>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsOptional', () => {
//     it('should return the awaited type', () => {
//       type Actual = $Promise<string, AsOptional>;
//       type Expected = Promise<string>;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsRequired', () => {
//     it('should return a union of Promise and the original type', () => {
//       type Actual = $Promise<string, AsRequired>;
//       type Expected = Promise<string> | string;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Then<number>', () => {
//     it('should return the Then type', () => {
//       type Actual = $Promise<Promise<string>, Then<number>>;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return false', () => {
//       type Actual = $Promise<string, Then<number>>;
//       type Expected = false;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('Else<boolean>', () => {
//     it('should return true', () => {
//       type Actual = $Promise<Promise<string>, Else<boolean>>;
//       type Expected = true;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = $Promise<string, Else<boolean>>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('AsCondition', () => {
//     it('should return true', () => {
//       type Actual = $Promise<Promise<string>, AsCondition>;
//       type Expected = true;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return false', () => {
//       type Actual = $Promise<string, AsCondition>;
//       type Expected = false;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });

//   describe('ConditionOf<number, boolean>', () => {
//     it('should return the Then type', () => {
//       type Actual = $Promise<Promise<string>, ConditionOf<number, boolean>>;
//       type Expected = number;

//       assertType<IsExact<Actual, Expected>>(true);
//     });

//     it('should return the Else type', () => {
//       type Actual = $Promise<string, ConditionOf<number, boolean>>;
//       type Expected = boolean;

//       assertType<IsExact<Actual, Expected>>(true);
//     });
//   });
// });
