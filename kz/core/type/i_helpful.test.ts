// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { IHelpful } from '@kz/core/type';

describe('IHelpful', () => {
  it('should match expected structure', () => {
    interface Structure {
      helpUrl: string;
    }

    type Test = IsExact<IHelpful, Structure>;
    const test: Test = true;

    assertType<Test>(test);
  });
});
