// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any ban-types
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { BannedTypes } from '@kz/util/lint';

describe('BannedTypes', () => {
  describe('type support', () => {
    it('supports the `any` type', () => {
      assertType<IsExact<BannedTypes['any'], any>>(true);
    });

    it('supports the `Function` type', () => {
      assertType<IsExact<BannedTypes['Function'], Function>>(true);
    });

    it('supports the `Boolean` type', () => {
      assertType<IsExact<BannedTypes['Boolean'], Boolean>>(true);
    });

    it('supports the `Number` type', () => {
      assertType<IsExact<BannedTypes['Number'], Number>>(true);
    });

    it('supports the `String` type', () => {
      assertType<IsExact<BannedTypes['String'], String>>(true);
    });

    it('supports the `Symbol` type', () => {
      assertType<IsExact<BannedTypes['Symbol'], Symbol>>(true);
    });

    it('supports the `Object` type', () => {
      assertType<IsExact<BannedTypes['Object'], Object>>(true);
    });

    it('supports the `{}` type', () => {
      assertType<IsExact<BannedTypes['{}'], {}>>(true);
    });
  });
});
