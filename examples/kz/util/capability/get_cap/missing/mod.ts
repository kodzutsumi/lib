// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- Retrieving a non-existent capability setting with a default
import { assertType, type IsExact } from '@std/testing/types';
import type { AsStrict, AsyncKey, GetCap } from '@kz/util/capability';

type Actual = GetCap<AsStrict, AsyncKey, false>;
type Expected = false;

assertType<IsExact<Actual, Expected>>(true);
