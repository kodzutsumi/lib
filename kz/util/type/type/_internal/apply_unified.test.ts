// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDistributed,
  AsNullOption,
  AsUnified,
} from '@kz/util/capability';

import type { ApplyUnified } from './apply_unified.ts';

describe('ApplyUnified', () => {
  it('should apply the unified type when UseUnified is not present', () => {
    type Actual = ApplyUnified<AsNullOption>;
    type Expected = AsNullOption & AsUnified;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return the settings when UseUnified is present', () => {
    type Actual = ApplyUnified<AsDistributed>;
    type Expected = AsDistributed;

    assertType<IsExact<Actual, Expected>>(true);
  });
});
