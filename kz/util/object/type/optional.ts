// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type {
//   AsExclude,
//   AsInclude,
//   ExclusionKey,
//   GetCap,
//   IdentsKey,
//   IdentsOf,
//   MergeOptions,
//   UseExclusion,
//   UseIdents,
// } from '@kz/util/capability';

// type Options<T> = UseIdents<T> & UseExclusion;
// type DefaultOptions<T> = Options<T> & AsInclude;
// type Signature<T> = UseIdents<T> | UseExclusion;

// type InnerOptional<
//   T,
//   O extends UseIdents<T> & UseExclusion<boolean>,
// > = O[ExclusionKey] extends true ?
//     & {
//       [K in O[IdentsKey]]?: T[K];
//     }
//     & {
//       [K in Exclude<keyof T, O[IdentsKey]>]: T[K];
//     }
//   :
//     & {
//       [K in Exclude<keyof T, O[IdentsKey]>]?: T[K];
//     }
//     & {
//       [K in O[IdentsKey]]: T[K];
//     };

// export type Optional<
//   T,
//   Ops extends Signature<T> = Options<T>,
// > = MergeOptions<DefaultOptions<T>, Ops> extends infer Opts
//   ? GetCap<Opts, ExclusionKey, false> extends false ? GetCap<
//       Opts,
//       IdentsKey,
//       keyof T
//     > extends infer Keys extends keyof T
//       ? InnerOptional<T, IdentsOf<T, Keys> & AsExclude>
//     : InnerOptional<T, IdentsOf<T, keyof T> & AsExclude>
//   : GetCap<
//     Opts,
//     IdentsKey,
//     keyof T
//   > extends infer Keys extends keyof T
//     ? InnerOptional<T, IdentsOf<T, Keys> & AsInclude>
//   : InnerOptional<T, IdentsOf<T, keyof T> & AsInclude>
//   : InnerOptional<T, IdentsOf<T, keyof T> & AsInclude>;
