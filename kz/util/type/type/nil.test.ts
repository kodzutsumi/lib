// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has } from '@std/testing/types';
import type { Nil } from '@kz/util/type';

describe('Nil', () => {
  it('should contain undefined', () => {
    assertType<Has<Nil, undefined>>(true);
  });

  it('should contain null', () => {
    assertType<Has<Nil, null>>(true);
  });
});
