// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- Flipping a non-condition
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsStrict,
  Flip,
  ResolveCapSet,
  UseAsync,
  UseStrict,
} from '@kz/util/capability';

type Actual = ResolveCapSet<
  AsAsync & AsStrict & Flip,
  UseAsync | UseStrict
>;
type Expected = AsAsync & AsStrict;

assertType<IsExact<Actual, Expected>>(true);
