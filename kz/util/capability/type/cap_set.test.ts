// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  CapSet,
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

describe('CapSet', () => {
  describe('structure', () => {
    it('should be a union of capability types', () => {
      type Actual = CapSet;
      type Expected =
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

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
