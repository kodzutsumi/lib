// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments
// import { describe, it } from '@std/testing/bdd';
// import { assertType, type IsExact } from '@std/testing/types';

// import type { IsNil, Nil } from '@kz/util/type';
// import type {
//   AsDistributed,
//   AsExclude,
//   AsFilter,
//   AsGetter,
//   AsInclude,
//   AsInverted,
//   AsLoose,
//   AsPredicate,
//   AsSetter,
//   AsStrict,
//   ConditionOf,
//   DefaultOf,
//   Else,
//   Then,
// } from '@kz/util/capability';

// describe('IsNil', () => {
//   describe('Make Nilable', () => {
//     describe('AsSetter (0)', () => {
//       it('should return a Nilable Type', () => {
//         type Actual = IsNil<string, AsSetter>;
//         type Expected = string | Nil;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });

//     describe('AsGetter (1)', () => {
//       it('should perform conditional behavior', () => {
//         type Actual = IsNil<string, AsGetter>;
//         type Expected = false;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });
//   });

//   describe('Exclude or extract Nil', () => {
//     describe('AsExclude (0)', () => {
//       it('should return never for Nil', () => {
//         type Actual = IsNil<Nil, AsExclude>;
//         type Expected = never;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return never for null', () => {
//         type Actual = IsNil<null, AsExclude>;
//         type Expected = never;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Type for non-Nil', () => {
//         type Actual = IsNil<string, AsExclude>;
//         type Expected = string;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Type for Nilable Type', () => {
//         type Actual = IsNil<string | Nil, AsExclude>;
//         type Expected = string;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });

//     describe('AsInclude (1)', () => {
//       it('should return Nil for Nil', () => {
//         type Actual = IsNil<Nil, AsInclude>;
//         type Expected = Nil;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return null for null', () => {
//         type Actual = IsNil<null, AsInclude>;
//         type Expected = null;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return never for non-Nil', () => {
//         type Actual = IsNil<string, AsInclude>;
//         type Expected = never;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return Nil for Nilable Type', () => {
//         type Actual = IsNil<string | Nil, AsInclude>;
//         type Expected = Nil;

//         assertType<IsExact<Actual, Expected>>(true);
//       });

//       it('should return null for Nullable Type', () => {
//         type Actual = IsNil<string | null, AsInclude>;
//         type Expected = null;

//         assertType<IsExact<Actual, Expected>>(true);
//       });
//     });
//   });

//   describe('Type checks', () => {
//     describe('Streaming', () => {
//       describe('AsFilter', () => {
//         describe('no default', () => {
//           describe('AsUnified', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (0)', () => {
//                 it('should return Nil for Nil', () => {
//                   type Actual = IsNil<Nil, AsFilter & AsStrict>;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for null', () => {
//                   type Actual = IsNil<null, AsFilter & AsStrict>;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for non-Nil', () => {
//                   type Actual = IsNil<string, AsFilter & AsStrict>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<string | Nil, AsFilter & AsStrict>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nullable', () => {
//                   type Actual = IsNil<string | null, AsFilter & AsStrict>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (1)', () => {
//                 it('should return Nil for Nilable', () => {
//                   type Actual = IsNil<string | Nil, AsFilter & AsLoose>;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nullable', () => {
//                   type Actual = IsNil<string | null, AsFilter & AsLoose>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (2)', () => {
//                 it('should return never for Nil', () => {
//                   type Actual = IsNil<Nil, AsFilter & AsStrict & AsInverted>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for null', () => {
//                   type Actual = IsNil<null, AsFilter & AsStrict & AsInverted>;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for non-Nil', () => {
//                   type Actual = IsNil<string, AsFilter & AsStrict & AsInverted>;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & AsInverted
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & AsInverted
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (3)', () => {
//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & AsInverted
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & AsInverted
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });

//           describe('AsDistributed', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (4)', () => {
//                 it('should return Nil for Nil', () => {
//                   type Actual = IsNil<Nil, AsFilter & AsStrict & AsDistributed>;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsFilter & AsStrict & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsFilter & AsStrict & AsDistributed
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (5)', () => {
//                 it('should return Nil for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (6)', () => {
//                 it('should return never for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsFilter & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsFilter & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsFilter & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (7)', () => {
//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & AsInverted & AsDistributed
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return Nil for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & AsInverted & AsDistributed
//                   >;
//                   type Expected = Nil;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });
//         });

//         describe('DefaultOf', () => {
//           describe('AsUnified', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (8)', () => {
//                 it('should return symbol for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsFilter & AsStrict & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsFilter & AsStrict & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsFilter & AsStrict & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (9)', () => {
//                 it('should return symbol for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (10)', () => {
//                 it('should return never for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsFilter & AsStrict & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsFilter & AsStrict & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsFilter & AsStrict & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (11)', () => {
//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & AsInverted & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });

//           describe('AsDistributed', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (12)', () => {
//                 it('should return symbol for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsFilter & AsStrict & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsFilter & AsStrict & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsFilter & AsStrict & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsStrict & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsStrict & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (13)', () => {
//                 it('should return symbol for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsFilter & AsLoose & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsFilter & AsLoose & AsDistributed & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (14)', () => {
//                 it('should return never for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     & AsFilter
//                     & AsStrict
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return never for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     & AsFilter
//                     & AsStrict
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     & AsFilter
//                     & AsStrict
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     & AsFilter
//                     & AsStrict
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     & AsFilter
//                     & AsStrict
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (15)', () => {
//                 it('should return never for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     & AsFilter
//                     & AsLoose
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = never;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return symbol for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     & AsFilter
//                     & AsLoose
//                     & AsInverted
//                     & AsDistributed
//                     & DefaultOf<symbol>
//                   >;
//                   type Expected = symbol;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });
//         });
//       });

//       describe('AsPredicate', () => {
//         describe('no default', () => {
//           describe('AsUnified', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (16)', () => {
//                 it('should return true for Nil', () => {
//                   type Actual = IsNil<Nil, AsPredicate & AsStrict>;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for null', () => {
//                   type Actual = IsNil<null, AsPredicate & AsStrict>;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for non-Nil', () => {
//                   type Actual = IsNil<string, AsPredicate & AsStrict>;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for Nilable', () => {
//                   type Actual = IsNil<string | Nil, AsPredicate & AsStrict>;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for Nullable', () => {
//                   type Actual = IsNil<string | null, AsPredicate & AsStrict>;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (17)', () => {
//                 it('should return true for Nilable', () => {
//                   type Actual = IsNil<string | Nil, AsPredicate & AsLoose>;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for Nullable', () => {
//                   type Actual = IsNil<string | null, AsPredicate & AsLoose>;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (18)', () => {
//                 it('should return false for Nil', () => {
//                   type Actual = IsNil<Nil, AsPredicate & AsStrict & AsInverted>;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsPredicate & AsStrict & AsInverted
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsPredicate & AsStrict & AsInverted
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsStrict & AsInverted
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsStrict & AsInverted
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (19)', () => {
//                 it('should return false for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsLoose & AsInverted
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsLoose & AsInverted
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });

//           describe('AsDistributed', () => {
//             describe('AsInitial', () => {
//               describe('AsStrict (20)', () => {
//                 it('should return true for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsPredicate & AsStrict & AsDistributed
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsPredicate & AsStrict & AsDistributed
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsPredicate & AsStrict & AsDistributed
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsStrict & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsStrict & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (21)', () => {
//                 it('should return true for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsLoose & AsDistributed
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsLoose & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });

//             describe('AsInverted', () => {
//               describe('AsStrict (22)', () => {
//                 it('should return false for Nil', () => {
//                   type Actual = IsNil<
//                     Nil,
//                     AsPredicate & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return false for null', () => {
//                   type Actual = IsNil<
//                     null,
//                     AsPredicate & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return true for non-Nil', () => {
//                   type Actual = IsNil<
//                     string,
//                     AsPredicate & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = true;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsStrict & AsInverted & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });

//               describe('AsLoose (23)', () => {
//                 it('should return false for Nilable', () => {
//                   type Actual = IsNil<
//                     string | Nil,
//                     AsPredicate & AsLoose & AsInverted & AsDistributed
//                   >;
//                   type Expected = false;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });

//                 it('should return boolean for Nullable', () => {
//                   type Actual = IsNil<
//                     string | null,
//                     AsPredicate & AsLoose & AsInverted & AsDistributed
//                   >;
//                   type Expected = boolean;

//                   assertType<IsExact<Actual, Expected>>(true);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });

//     describe('Condition', () => {
//       describe('AsCondition', () => {
//         describe('AsUnified', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (0)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<string | Nil>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (1)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<null, AsLoose>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, AsLoose>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsLoose>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (2)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsInverted>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<null, AsInverted>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<string, AsInverted>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsInverted>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (3)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & AsInverted>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null, AsLoose & AsInverted>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<string, AsLoose & AsInverted>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsLoose & AsInverted>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });

//         describe('AsDistributed', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (4)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, AsDistributed>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null, AsDistributed>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, AsDistributed>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return boolean for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsDistributed>;
//                 type Expected = boolean;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (5)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & AsDistributed>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return boolean for null', () => {
//                 type Actual = IsNil<null, AsLoose & AsDistributed>;
//                 type Expected = boolean;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, AsLoose & AsDistributed>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsLoose & AsDistributed>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (6)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsInverted & AsDistributed>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<null, AsInverted & AsDistributed>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<string, AsInverted & AsDistributed>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return boolean for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsInverted & AsDistributed>;
//                 type Expected = boolean;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (7)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & AsInverted & AsDistributed>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return boolean for null', () => {
//                 type Actual = IsNil<null, AsLoose & AsInverted & AsDistributed>;
//                 type Expected = boolean;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & AsDistributed
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & AsDistributed
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });
//       });

//       describe('Then', () => {
//         describe('AsUnified', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (8)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<Nil, Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<null, Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<string | Nil, Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (9)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<null, AsLoose & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, AsLoose & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsLoose & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (10)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsInverted & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<null, AsInverted & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<string, AsInverted & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsInverted & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (11)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & AsInverted & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<null, AsLoose & AsInverted & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & Then<string>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });

//         describe('AsDistributed', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (12)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<Nil, AsDistributed & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<null, AsDistributed & Then<string>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<string, AsDistributed & Then<string>>;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | false for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsDistributed & Then<string>>;
//                 type Expected = string | false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (13)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsDistributed & Then<string>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | false for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsDistributed & Then<string>
//                 >;
//                 type Expected = string | false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsDistributed & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsDistributed & Then<string>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (14)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | false for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = string | false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (15)', () => {
//               it('should return false for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | false for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = string | false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return false for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & AsDistributed & Then<string>
//                 >;
//                 type Expected = false;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });
//       });

//       describe('Else', () => {
//         describe('AsUnified', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (16)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null, Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<string, Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<string | Nil, Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (17)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<null, AsLoose & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<string, AsLoose & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsLoose & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (18)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<Nil, AsInverted & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<null, AsInverted & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<string, AsInverted & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsInverted & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (19)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & AsInverted & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null, AsLoose & AsInverted & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & Else<number>
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });

//         describe('AsDistributed', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (20)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<Nil, AsDistributed & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for null', () => {
//                 type Actual = IsNil<null, AsDistributed & Else<number>>;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<string, AsDistributed & Else<number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true | number for Nilable', () => {
//                 type Actual = IsNil<string | Nil, AsDistributed & Else<number>>;
//                 type Expected = true | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (21)', () => {
//               it('should return true for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsDistributed & Else<number>
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true | number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsDistributed & Else<number>
//                 >;
//                 type Expected = true | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsDistributed & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsDistributed & Else<number>
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (22)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true | number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = true | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (23)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true | number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = true | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return true for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = true;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & AsDistributed & Else<number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });
//       });

//       describe('ConditionOf', () => {
//         describe('AsUnified', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (24)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<Nil, ConditionOf<string, number>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<null, ConditionOf<string, number>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<string, ConditionOf<string, number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<string | Nil, ConditionOf<string, number>>;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (25)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<Nil, AsLoose & ConditionOf<string, number>>;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (26)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (27)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsInverted & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });

//         describe('AsDistributed', () => {
//           describe('AsInitial', () => {
//             describe('AsStrict (28)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (29)', () => {
//               it('should return string for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsLoose & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsLoose & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsLoose & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsLoose & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });

//           describe('AsInverted', () => {
//             describe('AsStrict (30)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   AsInverted & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   AsInverted & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   AsInverted & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   AsInverted & AsDistributed & ConditionOf<string, number>
//                 >;
//                 type Expected = string | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });

//             describe('AsLoose (31)', () => {
//               it('should return number for Nil', () => {
//                 type Actual = IsNil<
//                   Nil,
//                   & AsLoose
//                   & AsInverted
//                   & AsDistributed
//                   & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string | number for null', () => {
//                 type Actual = IsNil<
//                   null,
//                   & AsLoose
//                   & AsInverted
//                   & AsDistributed
//                   & ConditionOf<string, number>
//                 >;
//                 type Expected = string | number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return string for non-Nil', () => {
//                 type Actual = IsNil<
//                   string,
//                   & AsLoose
//                   & AsInverted
//                   & AsDistributed
//                   & ConditionOf<string, number>
//                 >;
//                 type Expected = string;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });

//               it('should return number for Nilable', () => {
//                 type Actual = IsNil<
//                   string | Nil,
//                   & AsLoose
//                   & AsInverted
//                   & AsDistributed
//                   & ConditionOf<string, number>
//                 >;
//                 type Expected = number;

//                 assertType<IsExact<Actual, Expected>>(true);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
