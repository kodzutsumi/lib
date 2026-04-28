// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  Collection,
  CollectionIdents,
  CollectionValues,
} from '@kz/util/capability';

import type { HandleWithType } from './handle_with_type.ts';
import type { HandleAsCollection } from './handle_as_collection.ts';
import type { HandleAsValue } from './handle_as_value.ts';

/**
 * Test that the `HandleWithType` type correctly routes to the appropriate type modifier based on the nature of the `TargetType` and the specified capabilities.
 */
describe('HandleWithType', () => {
  describe('UseCollection', () => {
    type TargetType = string;
    type OfType = {
      a: string;
      b: number;
    };
    describe('Collection', () => {
      it('should route to HandleAsCollection', () => {
        type Actual = HandleWithType<TargetType, OfType, Collection>;
        type Expected = HandleAsCollection<TargetType, OfType, 'collection'>;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('CollectionIdents', () => {
      it('should route to HandleAsCollectionIdents', () => {
        type Actual = HandleWithType<TargetType, OfType, CollectionIdents>;
        type Expected = HandleAsCollection<TargetType, OfType, 'idents'>;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('CollectionValues', () => {
      it('should route to HandleAsCollectionValues', () => {
        type Actual = HandleWithType<TargetType, OfType, CollectionValues>;
        type Expected = HandleAsCollection<TargetType, OfType, 'values'>;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('default', () => {
    type TargetType = string;
    type OfType = PropertyKey;
    it('should route to HandleAsValue', () => {
      type Actual = HandleWithType<TargetType, OfType>;
      type Expected = HandleAsValue<TargetType, OfType>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
