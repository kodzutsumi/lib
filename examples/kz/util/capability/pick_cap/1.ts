// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- Extracting a specific capability setting
import { assertType, type IsExact } from '@std/testing/types';
import type { AsAsync, AsyncKey, PickCap } from '@kz/util/capability';

type Actual = PickCap<AsAsync, AsyncKey, false>;
type Expected = AsAsync;

assertType<IsExact<Actual, Expected>>(true);
