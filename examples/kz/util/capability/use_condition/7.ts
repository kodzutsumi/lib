// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Providing a default condition</title>
// <description>By providing the {@linkcode AsCondition} type as a default for the capability settings, you can create a condition that defaults to `true` for the {@linkcode UseThen} capability and `false` for the {@linkcode UseElse} capability when the capabilities are not explicitly defined.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  GetElse,
  GetThen,
  UseSafeCondition,
} from '@kz/util/capability';

type Capabilities = UseSafeCondition;
type DefaultSettings = AsCondition;
type IsHello<
  T extends string,
  CapSet extends Capabilities = DefaultSettings,
> = T extends 'hello' ? GetThen<CapSet, true>
  : GetElse<CapSet, false>;

type ActualHello = IsHello<'hello'>;
type ActualWorld = IsHello<'world'>;
type ExpectedHello = true;
type ExpectedWorld = false;

assertType<IsExact<ActualHello, ExpectedHello>>(true);
assertType<IsExact<ActualWorld, ExpectedWorld>>(true);
// </code>
// </example>
