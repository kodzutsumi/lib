// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- //TODO(@ebntly): Add example

import { assertType, type IsExact } from '@std/testing/types';
// import type {
//   AsBuiltin,
//   AsCustom,
//   UseBuiltin,
// } from '@kz/util/capability';

// type Capabilities = UseBuiltin;
// type DefaultSettings = AsCustom;

assertType<IsExact<true, true>>(true);
