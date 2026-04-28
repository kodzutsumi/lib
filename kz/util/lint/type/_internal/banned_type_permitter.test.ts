// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any ban-types
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { BannedTypePermitter } from './banned_type_permitter.ts';

describe('BannedTypePermitter', () => {
  it('requires a reason for permitting a banned type', () => {
    type PermitAny = BannedTypePermitter<'any', 'Testing'>;

    assertType<IsExact<PermitAny, any>>(true);
  });

  it('will not accept an empty reason', () => {
    type PermitAny = BannedTypePermitter<'any', ''>;

    assertType<IsExact<PermitAny, never>>(true);
  });

  it('permits the any type with a reason', () => {
    type PermittedAny = BannedTypePermitter<'any', 'Testing'>;

    assertType<IsExact<PermittedAny, any>>(true);
  });

  it('permits the Function type with a reason', () => {
    type PermittedFunction = BannedTypePermitter<'Function', 'Testing'>;

    assertType<IsExact<PermittedFunction, Function>>(true);
  });

  it('permits the Boolean type with a reason', () => {
    type PermittedBoolean = BannedTypePermitter<'Boolean', 'Testing'>;

    assertType<IsExact<PermittedBoolean, Boolean>>(true);
  });

  it('permits the Number type with a reason', () => {
    type PermittedNumber = BannedTypePermitter<'Number', 'Testing'>;

    assertType<IsExact<PermittedNumber, Number>>(true);
  });

  it('permits the String type with a reason', () => {
    type PermittedString = BannedTypePermitter<'String', 'Testing'>;

    assertType<IsExact<PermittedString, String>>(true);
  });

  it('permits the Symbol type with a reason', () => {
    type PermittedSymbol = BannedTypePermitter<'Symbol', 'Testing'>;

    assertType<IsExact<PermittedSymbol, Symbol>>(true);
  });

  it('permits the Object type with a reason', () => {
    type PermittedObject = BannedTypePermitter<'Object', 'Testing'>;

    assertType<IsExact<PermittedObject, Object>>(true);
  });

  it('permits the `{}` (any non-nullish) type with a reason', () => {
    type PermittedObjectType = BannedTypePermitter<'{}', 'Testing'>;

    assertType<IsExact<PermittedObjectType, {}>>(true);
  });
});
