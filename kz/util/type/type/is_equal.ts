// // Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { ConditionOf, UseElse, UseThen } from '@kz/util/capability';

// import type { Extends } from './extends.ts';

// type Options = UseThen | UseElse;
// type Defaults = ConditionOf<true, false>;

// export type IsEqual<
//   Type1,
//   Type2,
//   $Options extends Options = Defaults,
// > = Extends<
//   (<Return>() => Return extends Type1 ? 1 : 2),
//   (<Return>() => Return extends Type2 ? 1 : 2),
//   $Options
// >;
