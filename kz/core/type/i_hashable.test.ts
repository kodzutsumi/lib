// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { IHashable } from '@kz/core/type';

describe('IHashable', () => {
  it('should match expected structure', () => {
    interface Structure {
      getHashCode(): number;
    }

    type Test = IsExact<IHashable, Structure>;
    const test: Test = true;

    assertType<Test>(test);
  });
});
