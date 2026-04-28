// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any
// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { Extends, Nil } from '@kz/util/type';
// import type { ConditionOf, Then } from '@kz/util/capability';

// describe('Extends', () => {
//   it('should check if a type contains another type', () => {
//     type ExtendsTrue = Extends<string, string>;
//     type ExtendsFalse = Extends<string, number>;

//     assertType<IsExact<ExtendsTrue, true>>(true);
//     assertType<IsExact<ExtendsFalse, false>>(true);
//   });

//   it('should support non-distributive types', () => {
//     type Arrayify<T> = Extends<[T], [any], ConditionOf<T[], never>>;
//     type StdArrayify<T> = T extends any ? T[] : never;
//     type NonDistStdArrayify<T> = [T] extends [any] ? T[] : never;

//     type Extended = Arrayify<string | number>;
//     type Dist = StdArrayify<string | number>;
//     type NonDist = NonDistStdArrayify<string | number>;

//     assertType<IsExact<Dist, (string[] | number[])>>(true);
//     assertType<IsExact<NonDist, (string | number)[]>>(true);
//     assertType<IsExact<Extended, NonDist>>(true);
//   });

//   it('should allow for conditional types', () => {
//     assertType<
//       IsExact<Extends<string, string, Then<PropertyKey>>, PropertyKey>
//     >(
//       true,
//     );
//     assertType<IsExact<Extends<string, number, Then<PropertyKey>>, false>>(
//       true,
//     );
//     assertType<
//       IsExact<Extends<string, number, ConditionOf<PropertyKey, Nil>>, Nil>
//     >(true);
//   });
//   //TODO(@ebntly): Complete
// });
