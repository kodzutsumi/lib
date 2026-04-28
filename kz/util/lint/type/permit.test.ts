// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any ban-types
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Permit } from '@kz/util/lint';

describe('Permit', () => {
  it('requires a reason for permitting a banned type', () => {
    type PermitAny = Permit<'any', '#i11n:testing'>;

    assertType<IsExact<PermitAny, any>>(true);
  });

  it('will not accept an empty reason', () => {
    type PermitAny = Permit<'any', ''>;

    assertType<IsExact<PermitAny, never>>(true);
  });

  it('permits the any type with a reason', () => {
    type PermittedAny = Permit<'any', '#i11n:testing'>;

    assertType<IsExact<PermittedAny, any>>(true);
  });

  it('permits the Function type with a reason', () => {
    type PermittedFunction = Permit<'Function', '#i11n:testing'>;

    assertType<IsExact<PermittedFunction, Function>>(true);
  });

  it('permits the Boolean type with a reason', () => {
    type PermittedBoolean = Permit<'Boolean', '#i11n:testing'>;

    assertType<IsExact<PermittedBoolean, Boolean>>(true);
  });

  it('permits the Number type with a reason', () => {
    type PermittedNumber = Permit<'Number', '#i11n:testing'>;

    assertType<IsExact<PermittedNumber, Number>>(true);
  });

  it('permits the String type with a reason', () => {
    type PermittedString = Permit<'String', '#i11n:testing'>;

    assertType<IsExact<PermittedString, String>>(true);
  });

  it('permits the Symbol type with a reason', () => {
    type PermittedSymbol = Permit<'Symbol', '#i11n:testing'>;

    assertType<IsExact<PermittedSymbol, Symbol>>(true);
  });

  it('permits the Object type with a reason', () => {
    type PermittedObject = Permit<'Object', '#i11n:testing'>;

    assertType<IsExact<PermittedObject, Object>>(true);
  });

  it('permits the `{}` (any non-nullish) type with a reason', () => {
    type PermittedObjectType = Permit<'{}', '#i11n:testing'>;

    assertType<IsExact<PermittedObjectType, {}>>(true);
  });
});
