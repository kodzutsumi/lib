// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  Collection,
  CollectionIdents,
  CollectionKey,
  CollectionKeyString,
  CollectionTarget,
  CollectionValues,
  GetCollection,
  PickCollection,
  UseCollection,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseCollection', () => {
  describe('CollectionKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof CollectionKeyString, '@@UseCollection'>>(true);
    });
  });

  describe('CollectionKey', () => {
    it('should be the type of CollectionKeyString', () => {
      assertType<IsExact<CollectionKey, typeof CollectionKeyString>>(true);
    });
  });

  describe('UseCollection', () => {
    it('should be an object type with the CollectionKeyString property of any value', () => {
      type Actual = UseCollection;
      type Expected = {
        [CollectionKeyString]: CollectionTarget;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Collection', () => {
    it("should be an object type with the CollectionKeyString property of 'collection'", () => {
      type Actual = Collection;
      type Expected = {
        [CollectionKeyString]: 'collection';
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('CollectionIdents', () => {
    it("should be an object type with the CollectionKeyString property of 'idents'", () => {
      type Actual = CollectionIdents;
      type Expected = {
        [CollectionKeyString]: 'idents';
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('CollectionValues', () => {
    it("should be an object type with the CollectionKeyString property of 'values'", () => {
      type Actual = CollectionValues;
      type Expected = {
        [CollectionKeyString]: 'values';
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('PickCollection', () => {
    it('should return Else', () => {
      type CapabilitySet = UseCollection & AsStrict;
      type Actual = PickCollection<CapabilitySet>;
      type Expected = UseCollection;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Collection', () => {
      type CapabilitySet = Collection & AsStrict;
      type Actual = PickCollection<CapabilitySet>;
      type Expected = UseCollection<'collection'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return CollectionIdents', () => {
      type CapabilitySet = CollectionIdents & AsStrict;
      type Actual = PickCollection<CapabilitySet>;
      type Expected = UseCollection<'idents'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return CollectionValues', () => {
      type CapabilitySet = CollectionValues & AsStrict;
      type Actual = PickCollection<CapabilitySet>;
      type Expected = UseCollection<'values'>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickCollection<CapabilitySet, 'collection'>;
      type Expected = UseCollection<'collection'>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetCollection', () => {
    it('should return CollectionTarget', () => {
      type CapabilitySet = UseCollection & AsStrict;
      type Actual = GetCollection<CapabilitySet>;
      type Expected = CollectionTarget;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return 'collection'", () => {
      type CapabilitySet = Collection & AsStrict;
      type Actual = GetCollection<CapabilitySet>;
      type Expected = 'collection';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return 'idents'", () => {
      type CapabilitySet = CollectionIdents & AsStrict;
      type Actual = GetCollection<CapabilitySet>;
      type Expected = 'idents';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it("should return 'values'", () => {
      type CapabilitySet = CollectionValues & AsStrict;
      type Actual = GetCollection<CapabilitySet>;
      type Expected = 'values';

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetCollection<CapabilitySet, 'collection'>;
      type Expected = 'collection';

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
