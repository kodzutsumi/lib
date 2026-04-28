// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments
// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { AsDeep } from '@kz/util/capability';
// import type { Brand, Flavor, Tagged } from '@kz/util/nominal';
// import type { Widen } from '@kz/util/type';

// describe('Widen', () => {
//   it('should widen string literal types to string', () => {
//     assertType<IsExact<Widen<'a'>, string>>(true);
//   });

//   it('should widen number literal types to number', () => {
//     assertType<IsExact<Widen<42>, number>>(true);
//   });

//   it('should widen boolean literal types to boolean', () => {
//     assertType<IsExact<Widen<true>, boolean>>(true);
//   });

//   it('should widen array types (shallow)', () => {
//     assertType<IsExact<Widen<[1, 2, 3]>, number[]>>(true);
//     assertType<
//       IsExact<Widen<[[1, 2, 3], [4, 5, 6]]>, ((1 | 2 | 3)[] | (4 | 5 | 6)[])[]>
//     >(true);
//   });

//   it('should widen array types (deep)', () => {
//     assertType<IsExact<Widen<[1, 2, 3], AsDeep>, number[]>>(true);
//     assertType<IsExact<Widen<[[1, 2, 3], [4, 5, 6]], AsDeep>, (number[])[]>>(
//       true,
//     );
//   });

//   it('should widen object types (shallow)', () => {
//     assertType<IsExact<Widen<{ a: 'a' }>, { a: string }>>(true);
//     assertType<
//       IsExact<Widen<{ a: { b: 'b' }; c: 25 }>, { a: { b: 'b' }; c: number }>
//     >(true);
//   });

//   it('should widen object types (deep)', () => {
//     assertType<IsExact<Widen<{ a: 'a' }, AsDeep>, { a: string }>>(true);
//     assertType<
//       IsExact<Widen<{ a: { b: 'b' } }, AsDeep>, { a: { b: string } }>
//     >(
//       true,
//     );
//   });

//   it('should widen branded, flavored, and tagged types to their base type', () => {
//     type UserName = Brand<string, 'UserName'>;
//     type Email = Flavor<string, 'Email'>;
//     type Admin = Tagged<string, 'Admin'>;

//     assertType<IsExact<Widen<UserName>, string>>(true);
//     assertType<IsExact<Widen<Email>, string>>(true);
//     assertType<IsExact<Widen<Admin>, string>>(true);
//   });
// });
