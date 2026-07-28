// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type {
//   AsCondition,
//   Else,
//   PickThen,
//   ResolveCapSet,
//   UseCondition,
//   UseFlippable,
//   UseStream,
// } from '@kz/util/capability';

// import type { IsAny } from './is_any.ts';
// import type { IsNever } from './is_never.ts';

// type Capabilities = UseCondition | UseStream | UseFlippable;
// type DefaultSettings = AsCondition;

// export type Contains<
//   Type,
//   Subtype,
//   Settings extends Capabilities = DefaultSettings,
// > = IsAny<
//   Type,
//   & PickThen<Settings, true>
//   & Else<
//     IsAny<
//       Subtype,
//       & PickThen<Settings, true>
//       & Else<
//         IsNever<Extract<Type, Subtype>, ResolveCapSet<Settings, Capabilities>>
//       >
//     >
//   >
// >;
