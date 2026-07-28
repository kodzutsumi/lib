// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { RetrieveObject } from './retrieve_object.ts';

/**
 * Test that the `RetrieveObject` type correctly routes to the appropriate type modifier based on the nature of the `TargetType` and the specified capabilities.
 */
describe('RetrieveObject', () => {
  describe('Collection', () => {
    it('should return a new collection', () => {
      type OfType = {
        a: string;
        b: number;
      };

      type Actual = RetrieveObject<string, OfType, 'collection'>;
      type Expected = {
        a: string;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('CollectionIdents', () => {
    it('should return the collection idents for object types', () => {
      type OfType = {
        a: string;
        b: number;
      };

      type Actual = RetrieveObject<string, OfType, 'idents'>;
      type Expected = 'a';

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('CollectionValues', () => {
    it('should return the collection values for object types', () => {
      type OfType = {
        a: string;
        b: number;
      };

      type Actual = RetrieveObject<string, OfType, 'values'>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
