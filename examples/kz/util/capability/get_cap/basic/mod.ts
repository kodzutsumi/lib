// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { assertType, type IsExact } from '@std/testing/types';
import type { AsAsync, AsyncKey, GetCap } from '@kz/util/capability';

type Actual = GetCap<AsAsync, AsyncKey, false>;
type Expected = true;

assertType<IsExact<Actual, Expected>>(true);
