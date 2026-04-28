// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type {
//   AsShallow,
//   ConditionOf,
//   DecrementDepth,
//   IsDeep,
//   UseDepth,
// } from '@kz/util/capability';
// import type { Clean } from './clean.ts';
// import type { Extends } from './extends.ts';
// import type { IsUndefined } from './is_undefined.ts';
// import type { IsNull } from './is_null.ts';

// type WidenOptions = UseDepth;
// type Defaults = AsShallow;

// export type Widen<Type, Options extends WidenOptions = Defaults> = Extends<
//   Type,
//   string,
//   ConditionOf<
//     string,
//     Extends<
//       Type,
//       number,
//       ConditionOf<
//         number,
//         Extends<
//           Type,
//           boolean,
//           ConditionOf<
//             boolean,
//             Type extends Array<infer Element> ? Array<
//                 Clean<
//                   IsDeep<
//                     Options,
//                     ConditionOf<
//                       Widen<Element, DecrementDepth<Options>>,
//                       SimpleWiden<Element>
//                     >
//                   >
//                 >
//               >
//               : Extends<
//                 Type,
//                 Record<never, never>,
//                 ConditionOf<
//                   {
//                     [Key in keyof Type]: Clean<
//                       IsDeep<
//                         Options,
//                         ConditionOf<
//                           Widen<Type[Key], DecrementDepth<Options>>,
//                           SimpleWiden<Type[Key]>
//                         >
//                       >
//                     >;
//                   },
//                   IsNull<
//                     Type,
//                     ConditionOf<
//                       null,
//                       IsUndefined<
//                         Type,
//                         ConditionOf<
//                           undefined,
//                           Type extends infer Self ? Self : Type
//                         >
//                       >
//                     >
//                   >
//                 >
//               >
//           >
//         >
//       >
//     >
//   >
// >;

// type SimpleWiden<Type> = Extends<
//   Type,
//   string,
//   ConditionOf<
//     string,
//     Extends<
//       Type,
//       number,
//       ConditionOf<
//         number,
//         Extends<
//           Type,
//           boolean,
//           ConditionOf<
//             boolean,
//             Type extends Array<infer Element> ? Array<Element>
//               : Extends<
//                 Type,
//                 Record<never, never>,
//                 ConditionOf<
//                   {
//                     [Key in keyof Type]: Type[Key];
//                   },
//                   IsNull<
//                     Type,
//                     ConditionOf<
//                       null,
//                       IsUndefined<
//                         Type,
//                         ConditionOf<
//                           undefined,
//                           Type extends infer Self ? Self : Type
//                         >
//                       >
//                     >
//                   >
//                 >
//               >
//           >
//         >
//       >
//     >
//   >
// >;
