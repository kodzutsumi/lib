// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments
// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { Clean } from '@kz/util/type';
// import type { AsDeep } from '@kz/util/capability';

// type Nested = {
//   string: string;
//   number: number;
// };

// type Nested2 = {
//   string: string;
//   number: number;
//   nested: Nested;
// };
// type Test = {
//   string: string;
//   number: number;
//   nested: Nested2;
//   both: Nested | Nested2;
// };

// type CleanedDeep = {
//   string: string;
//   number: number;
//   nested: {
//     string: string;
//     number: number;
//     nested: {
//       string: string;
//       number: number;
//     };
//   };
//   both: {
//     string: string;
//     number: number;
//     nested: {
//       string: string;
//       number: number;
//     };
//   } | {
//     string: string;
//     number: number;
//   };
// };

// describe('Clean', () => {
//   it('should clean up the types', () => {
//     type Result = Clean<Test>;
//     type ResultDeep = Clean<Test, AsDeep>;

//     // Hover over `Result`, `Test`, `CleanedDeep`, and `ResultDeep` to see the
//     // differences in type display.
//     // `Test` is uncleaned, so can be difficult to read.
//     // `Result` is the expected cleaned type.
//     // `CleanedDeep` is the manually typed cleaned type.
//     // `ResultDeep` is the cleaned type with deep cleaning applied.
//     // All are equal in type and assignable to each other.

//     assertType<IsExact<Result, Test>>(true);
//     assertType<IsExact<Test, CleanedDeep>>(true);
//     assertType<IsExact<Result, CleanedDeep>>(true);
//     assertType<IsExact<ResultDeep, CleanedDeep>>(true);
//   });
// });
