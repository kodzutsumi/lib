// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsSetter } from '@kz/util/capability';

import type { HandleAsCollection } from './handle_as_collection.ts';
import type { RetrieveCollection } from './retrieve_collection.ts';
import type { UpdateCollection } from './update_collection.ts';

/**
 * Test that the `HandleAsCollection` type correctly routes to the appropriate type modifier based on the nature of the `TargetType` and the specified capabilities.
 */
describe('HandleAsCollection', () => {
  type TargetType = number;
  type OfType = {
    a: string;
    b: number;
    c: boolean;
    d: Date;
  };

  describe('AsGetter', () => {
    it('should route to RetrieveCollection by default', () => {
      type Actual = HandleAsCollection<TargetType, OfType, 'collection'>;
      type Expected = RetrieveCollection<TargetType, OfType, 'collection'>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsSetter', () => {
    it('should route to UpdateCollection when AsSetter capability is specified', () => {
      type Actual = HandleAsCollection<
        TargetType,
        OfType,
        'collection',
        AsSetter
      >;
      type Expected = UpdateCollection<TargetType, OfType, AsSetter>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
