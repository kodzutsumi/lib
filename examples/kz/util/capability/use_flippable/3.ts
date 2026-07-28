// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Flipping just a {@linkcode Then}</title>
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
  Then<string> & AsStrict & Flip,
  UseCondition | UseStrict
>;
type Expected = Else<string> & AsStrict;

assertType<IsExact<Actual, Expected>>(true);
// </code>
// </example>
