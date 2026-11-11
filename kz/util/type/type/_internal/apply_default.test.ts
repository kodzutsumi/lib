// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsNullOption, DefaultOf } from '@kz/util/capability';

import type { ApplyDefault } from './apply_default.ts';

describe('ApplyDefault', () => {
  it('should apply the default type when UseDefault is not present', () => {
    type Actual = ApplyDefault<AsNullOption, string>;
    type Expected = AsNullOption & DefaultOf<string>;

    assertType<IsExact<Actual, Expected>>(true);
  });

  it('should return the settings when UseDefault is present', () => {
    type Actual = ApplyDefault<DefaultOf<number>, string>;
    type Expected = DefaultOf<number>;

    assertType<IsExact<Actual, Expected>>(true);
  });
});
