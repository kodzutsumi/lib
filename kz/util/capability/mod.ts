// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export * from './type/mod.ts';

//TODO(@ebntly): Needs an example. Maybe got through process of a type from simple to complex.
/**
 * > [!NOTE]
 * > This is a types-only sub-module.
 *
 * Provide functionality to types with capability sets ({@linkcode CapSet}).
 *
 * The `@kz/util/capability` module provides a collection of capabilities providing consistency and customization to type behavior. This allows more dynamic types that can cover multiple cases, reducing the overall number of exported types.
 * ## Terminology
 * ### Capability signature
 * A capability set signature is the definition of what capabilities are supported by a type. They use the default usage of a capability, the `Use*` types without any setting provided. This provides a capability set that accepts any capability setting value for a given capability setting. When defining the capability set signature for a type, you should always use unions (`|`) to aggregate them
 * ```ts
 * import {
 *   UseCondition,
 *   UseOptional,
 *   UseStrict,
 * } from '@kz/util/capability';
 *
 * type Signature = UseCondition | UseOptional | UseStrict;
 * ```
 * ### Capability setting
 * A capability setting is a capability that has a setting defined outside of the default value of its signature. This indicates the behavior to expect from a type. When providing the capability settings for a type, you should always use intersections ('&') to aggregate them.
 * ```ts
 * import {
 *   ConditionOf,
 *   AsOptional,
 *   AsStrict,
 * } from '@kz/util/capability';
 *
 * type Settings = ConditionOf<string, number> & AsOptional & AsStrict;
 * ```
 * ### Capability setting value
 * A capability setting value is the value type of a capability setting. When used, it is often retrieved within a type to determine what behavior to perform.
 * ```ts
 * import { assertType, type IsExact } from '@std/testing/types';
 * import {
 *   ConditionOf,
 *   AsOptional,
 *   AsStrict,
 *   GetStrict,
 * } from '@kz/util/capability';
 *
 * type Settings = ConditionOf<string, number> & AsOptional & AsStrict;
 * type Actual = GetStrict<Settings>;
 * type Expected = true;
 *
 * assertType<IsExact<Actual, Expected>>(true);
 * ```
 *
 * @module
 */
