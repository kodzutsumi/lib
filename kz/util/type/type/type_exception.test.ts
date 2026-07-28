// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { TypeException } from '@kz/util/type';
import type { Brand } from '@kz/util/nominal';

describe('TypeException', () => {
  it('should provide data on known exceptions', () => {
    type Actual = TypeException<Record<string, number>, '0x1'>;
    type Excepted = Brand<{
      exception: true;
      referenceType: Record<string, number>;
      message: 'Missing `Of<Type>` capability for `CheckType`';
      url: 'https://docs.i11n.io/ex2/ts/0x1';
    }, 'TypeException'>;

    assertType<IsExact<Actual, Excepted>>(true);
  });

  it('should provide data on unknown exceptions', () => {
    type Actual = TypeException<Record<string, number>, '0x99'>;
    type Excepted = Brand<{
      exception: true;
      referenceType: Record<string, number>;
      message: '0x99';
      url: 'https://docs.i11n.io/ex2/ts/0x0?message=0x99';
    }, 'TypeException'>;

    assertType<IsExact<Actual, Excepted>>(true);
  });

  it('should provide data on exception messages', () => {
    type Actual = TypeException<
      Record<string, number>,
      'An exception has occurred.'
    >;
    type Excepted = Brand<{
      exception: true;
      referenceType: Record<string, number>;
      message: 'An exception has occurred.';
      url: 'https://docs.i11n.io/ex2/ts/0x0?message=An exception has occurred.';
    }, 'TypeException'>;

    assertType<IsExact<Actual, Excepted>>(true);
  });
});
