// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// --- Flipping a full condition
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  ConditionOf,
  Flip,
  ResolveCapSet,
  UseCondition,
  UseStrict,
} from '@kz/util/capability';

type Actual = ResolveCapSet<
  ConditionOf<string, number> & AsStrict & Flip,
  UseCondition | UseStrict
>;
type Expected = ConditionOf<number, string> & AsStrict;

assertType<IsExact<Actual, Expected>>(true);
