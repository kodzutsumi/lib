// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsUnified, AsUnsafe } from '@kz/util/capability';

import type { ApplySafety } from './apply_safety.ts';

/**
 * Test that the `ApplySafety` type correctly transforms boolean types based on the specified capabilities.
 *
 * The tests cover both the default `AsSafe` behavior, which retains the original boolean types, and the `AsUnsafe` behavior, which converts `boolean` to `true` while retaining `true` and `false` as they are.
 */
describe('ApplySafety', () => {
  describe('AsSafe (default)', () => {
    it('should retain boolean', () => {
      type Actual = ApplySafety<boolean, AsUnified>;
      type Expected = boolean;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should retain true', () => {
      type Actual = ApplySafety<true, AsUnified>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should retain false', () => {
      type Actual = ApplySafety<false, AsUnified>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsUnsafe', () => {
    it('should convert boolean to true', () => {
      type Actual = ApplySafety<boolean, AsUnified & AsUnsafe>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should retain true', () => {
      type Actual = ApplySafety<true, AsUnified & AsUnsafe>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should retain false', () => {
      type Actual = ApplySafety<false, AsUnified & AsUnsafe>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
