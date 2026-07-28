// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsDistributed, AsLoose, AsUnsafe, Of } from '@kz/util/capability';

import type { Any } from '../../any.ts';
import type { TypeException } from '../../type_exception.ts';

import type { CheckType } from './check_type.ts';
import type { StandardCapabilities } from './types.ts';

type AnyType = Any<'i11n#testing'>;

/**
 * Test that the `CheckType` type is applying the safety settings and that it is throwing an error on bad input.
 */
describe('CheckType', () => {
  describe('AsSafe (default)', () => {
    it('should retain boolean result', () => {
      type Actual = CheckType<AnyType, never, AsDistributed>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsUnsafe', () => {
    it('should convert to boolean result', () => {
      type Actual = CheckType<AnyType, never, AsLoose & AsUnsafe>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
