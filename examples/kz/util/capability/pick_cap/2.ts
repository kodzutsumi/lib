// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- Extracting a non-existent capability setting with a default
import { assertType, type IsExact } from '@std/testing/types';
import type { AsStrict, AsSync, AsyncKey, PickCap } from '@kz/util/capability';

type Actual = PickCap<AsStrict, AsyncKey, false>;
type Expected = AsSync;

assertType<IsExact<Actual, Expected>>(true);
