// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Flipping a basic condition</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  AsStrict,
  ConditionOf,
  Flip,
  ResolveCapSet,
  UseCondition,
  UseStrict,
} from '@kz/util/capability';

type Actual = ResolveCapSet<
  AsCondition & AsStrict & Flip,
  UseCondition | UseStrict
>;
type Expected = ConditionOf<false, true> & AsStrict;

assertType<IsExact<Actual, Expected>>(true);
// </code>
// </example>
