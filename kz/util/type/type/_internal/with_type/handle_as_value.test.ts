// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsSetter } from '@kz/util/capability';

import type { HandleAsValue } from './handle_as_value.ts';
import type { RetrieveValue } from './retrieve_value.ts';
import type { UpdateValue } from './update_value.ts';

/**
 * Test that the `HandleAsValue` type correctly routes to the appropriate type modifier based on the nature of the `TargetType` and the specified capabilities.
 */
describe('HandleAsValue', () => {
  type TargetType = PropertyKey;
  type OfType = number;

  describe('AsGetter', () => {
    it('should route to RetrieveValue by default', () => {
      type Actual = HandleAsValue<TargetType, OfType>;
      type Expected = RetrieveValue<TargetType, OfType>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsSetter', () => {
    it('should route to UpdateValue when AsSetter capability is specified', () => {
      type Actual = HandleAsValue<TargetType, OfType, AsSetter>;
      type Expected = UpdateValue<TargetType, OfType, AsSetter>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
