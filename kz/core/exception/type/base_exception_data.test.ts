// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import { describe, it } from '@std/testing/bdd';
// import { assertType, type Has } from '@std/testing/types';

// import type { BaseExceptionData } from '@kz/core/exception';

// describe('BaseExceptionData', () => {
//   it('should match expected structure', () => {
//     const structure = {
//       cause: new Error(),
//     };

//     type Structure = typeof structure;

//     type Test = Has<Structure, BaseExceptionData>;
//     const test: Test = true;

//     assertType<Test>(test);
//   });

//   it('should match expected structure empty', () => {
//     const structure = {};

//     type Structure = typeof structure;

//     type Test = Has<Structure, BaseExceptionData>;
//     const test: Test = true;

//     assertType<Test>(test);
//   });

//   it('should match the T structure', () => {
//     type T = {
//       customKey?: string;
//       customNumber?: number;
//     };
//     const structure = {
//       cause: new Error(),
//       customKey: 'value',
//     };

//     type Structure = typeof structure;

//     type Test = Has<Structure, BaseExceptionData<T>>;
//     const test: Test = true;

//     assertType<Test>(test);
//   });
// });
