// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { If } from '@kz/util/logic';
// import type {
//   AsCondition,
//   AsUnified,
//   DefaultOf,
//   UseCondition,
//   UseDefault,
//   UseInversion,
//   UseStream,
//   UseUnified,
// } from '@kz/util/capability';

// type Capabilities =
//   | UseCondition
//   | UseStream
//   | UseInversion
//   | UseUnified
//   | UseDefault;
// type DefaultSettings = AsCondition;

// export type Extends<
//   Type,
//   Supertype,
//   Settings extends Capabilities = DefaultSettings,
// > = Settings extends AsUnified
//   ? If<[Type] extends [Supertype] ? true : false, ApplyDefault<Settings>>
//   : If<Type extends Supertype ? true : false, ApplyDefault<Settings>>;

// type ApplyDefault<Settings extends Capabilities> = Settings extends UseDefault
//   ? Settings
//   : Settings & DefaultOf<true>;
