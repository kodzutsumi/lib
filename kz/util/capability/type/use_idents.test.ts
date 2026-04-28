// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  GetIdents,
  GetReferenceType,
  IdentsKeyString,
  IdentsOf,
  PickIdents,
  ReferenceTypeKey,
  ReferenceTypeKeyString,
  UseIdents,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseIdents', () => {
  type Test = {
    first: string;
    middle: string;
    last: string;
    hireDate: Date;
    active: boolean;
  };

  describe('IdentsKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof IdentsKeyString, '@@UseIdents'>>(true);
    });
  });

  describe('ReferenceTypeKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ReferenceTypeKeyString, '@@UseReferenceType'>>(
        true,
      );
    });
  });

  describe('ReferenceTypeKey', () => {
    it('should be the type of ReferenceTypeKeyString', () => {
      assertType<IsExact<ReferenceTypeKey, typeof ReferenceTypeKeyString>>(
        true,
      );
    });
  });

  describe('ReferenceTypeKey', () => {
    it('should be the type of ReferenceTypeKeyString', () => {
      assertType<IsExact<ReferenceTypeKey, typeof ReferenceTypeKeyString>>(
        true,
      );
    });
  });

  describe('UseIdents', () => {
    it('should be an object type with the IdentsKeyString property of any key of the any in ReferenceTypeKeyString', () => {
      type Actual = UseIdents;
      type Expected = {
        [ReferenceTypeKeyString]: AnyType;
        [IdentsKeyString]: PropertyKey;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('IdentsOf', () => {
    it('should be a UseIdents type with the IdentsKeyString property of any key of the any in ReferenceTypeKeyString', () => {
      type Actual = IdentsOf;
      type AsUsed = UseIdents;
      type Expected = {
        [ReferenceTypeKeyString]: AnyType;
        [IdentsKeyString]: PropertyKey;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('IdentsOf<Type>', () => {
    it('should be a UseIdents type with the IdentsKeyString property set to keys of the type in ReferenceTypeKeyString', () => {
      type Actual = IdentsOf<Test>;
      type AsUsed = UseIdents<Test>;
      type Expected = {
        [ReferenceTypeKeyString]: Test;
        [IdentsKeyString]: keyof Test;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe("IdentsOf<Type, 'first' | 'last' | 'middle'>", () => {
    it('should be a UseIdents type with the IdentsKeyString property set to keys of the type in ReferenceTypeKeyString', () => {
      type Actual = IdentsOf<Test, 'first' | 'last' | 'middle'>;
      type AsUsed = UseIdents<Test, 'first' | 'last' | 'middle'>;
      type Expected = {
        [ReferenceTypeKeyString]: Test;
        [IdentsKeyString]: 'first' | 'last' | 'middle';
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickIdents', () => {
    it('should return IdentsOf', () => {
      type CapabilitySet = IdentsOf & AsStrict;
      type Actual = PickIdents<CapabilitySet>;
      type Expected = UseIdents;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Else<string>', () => {
      type CapabilitySet = IdentsOf<Test> & AsStrict;
      type Actual = PickIdents<CapabilitySet>;
      type Expected = UseIdents<Test>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickIdents<CapabilitySet, 'first' | 'last' | 'middle'>;
      type Expected = UseIdents<AnyType, 'first' | 'last' | 'middle'>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetIdents', () => {
    it('should return PropertyKey', () => {
      type CapabilitySet = IdentsOf & AsStrict;
      type Actual = GetIdents<CapabilitySet>;
      type Expected = PropertyKey;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return keyof Test', () => {
      type CapabilitySet = IdentsOf<Test> & AsStrict;
      type Actual = GetIdents<CapabilitySet>;
      type Expected = keyof Test;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetIdents<CapabilitySet, 'first' | 'last' | 'middle'>;
      type Expected = 'first' | 'last' | 'middle';

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetReferenceType', () => {
    it('should return PropertyKey', () => {
      type CapabilitySet = IdentsOf & AsStrict;
      type Actual = GetReferenceType<CapabilitySet>;
      type Expected = AnyType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Test', () => {
      type CapabilitySet = IdentsOf<Test> & AsStrict;
      type Actual = GetReferenceType<CapabilitySet>;
      type Expected = Test;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type AnotherTest = {
        account: string;
        active: boolean;
        startDate: Date;
      };

      type CapabilitySet = AsStrict;
      type Actual = GetReferenceType<CapabilitySet, AnotherTest>;
      type Expected = AnotherTest;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
