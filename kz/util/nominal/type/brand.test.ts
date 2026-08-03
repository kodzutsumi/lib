// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Widen } from '@kz/util/type';
import type { Brand } from '@kz/util/nominal';

describe('Brand', () => {
  it('should create a branded type', () => {
    type UserName = Brand<string, 'Email'>;

    assertType<Has<UserName, string>>(true);
  });

  it('should be able to assign a value with a type assertion', () => {
    type UserName = Brand<string, 'Email'>;

    const userName = 'apeterson@example.com' as UserName;
    assertType<IsExact<typeof userName, UserName>>(true);
  });

  it('should allow sub-typing', () => {
    type UserName = Brand<string, 'UserName'>;
    type Email = Brand<UserName, 'Email'>;

    const email = 'rcoffey@example.com' as Email;
    const userName: UserName = email;

    assertType<IsExact<typeof userName, UserName>>(true);

    // Failure case
    const userName2 = 'cstrickland@example.com' as UserName;

    // Type 'Brand<string, "UserName">' is not assignable to type 'never'.
    //   The intersection 'Brand<Brand<string, "UserName">, "Email">' was reduced
    //   to 'never' because property '[BrandSymbolType]' has conflicting types in
    //   some constituents.
    // @ts-expect-error See above comment
    const _email2: Email = userName2;
  });

  it('should widen to the unbranded type', () => {
    type UserName = Brand<string, 'UserName'>;

    assertType<IsExact<Widen<UserName>, string>>(true);
  });
});
