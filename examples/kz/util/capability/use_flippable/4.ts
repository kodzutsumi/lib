// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Flipping just a {@linkcode Else}</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  Else,
  Flip,
  ResolveCapSet,
  Then,
  UseCondition,
  UseStrict,
} from '@kz/util/capability';

type Actual = ResolveCapSet<
  Else<number> & AsStrict & Flip,
  UseCondition | UseStrict
>;
type Expected = Then<number> & AsStrict;

assertType<IsExact<Actual, Expected>>(true);
// </code>
// </example>
