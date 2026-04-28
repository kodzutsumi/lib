// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  UseAccessor,
  UseAsync,
  UseBuiltin,
  UseCollection,
  UseCondition,
  UseDefault,
  UseDepth,
  UseElse,
  UseExclusion,
  UseIdents,
  UseImmutable,
  UseInversion,
  UseNullOption,
  UseOfType,
  UseOptional,
  UseReverse,
  UseSafe,
  UseStream,
  UseStrict,
  UseUnified,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * Represents a set of capabilities that can be used to configure the behavior of a type, allowing for flexible and composable configurations.
 */
export type CapSet =
  | UseAsync
  | UseBuiltin
  | UseCollection
  | UseOptional
  | UseCondition
  | UseDefault
  | UseDepth
  | UseReverse
  | UseElse
  | UseExclusion
  | UseStream
  | UseInversion
  | UseIdents
  | UseImmutable
  | UseNullOption
  | UseOfType
  | UseSafe
  | UseAccessor
  | UseStrict
  | UseUnified;

/**
 * Represents the full set of capabilities that can be used in a capability set, allowing for type-level manipulation and inference of capabilities. This type is derived from the CapSet type and represents the intersection of all capabilities included in the CapSet, providing a comprehensive view of the capabilities available for use.
 */
export type FullCapSet = ToIntersect<CapSet>;

/**
 * Represents the keys of the capabilities included in a capability set, allowing for type-level manipulation and inference of capability keys. This type is derived from the CapSet type and represents the union of all keys of the capabilities included in the CapSet, providing a comprehensive view of the capability keys available for use.
 */
export type CapSetKeys = keyof ToIntersect<CapSet>;

//TODO(@ebntly) Move to kz/util/type
type ToIntersect<U> = (U extends AnyType ? (x: U) => void : never) extends
  ((x: infer I) => void) ? I : never;
