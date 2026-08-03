// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Widen } from '@kz/util/type';
import type { Flavor } from '@kz/util/nominal';

describe('Flavor', () => {
  it('should create a flavored type', () => {
    type UserName = Flavor<string, 'Email'>;

    assertType<Has<UserName, string>>(true);
  });

  it('should be able to assign a value with a type assertion', () => {
    type UserName = Flavor<string, 'Email'>;

    const userName = 'apeterson@example.com' as UserName;
    assertType<IsExact<typeof userName, UserName>>(true);
  });

  it('should allow sub-typing', () => {
    type UserName = Flavor<string, 'UserName'>;
    type Email = Flavor<UserName, 'Email'>;
    const email: Email = 'rcoffey@example.com';
    const userName: UserName = email;

    assertType<IsExact<typeof userName, UserName>>(true);
    // Failure case
    const userName2: UserName = 'cstrickland@example.com';

    // Type 'Flavor<string, "UserName">' is not assignable to type
    // 'Flavor<Flavor<string, "UserName">, "Email">'.
    //    Type 'Flavor<string, "UserName">' is not assignable to type
    //    'Flavored<"Email">'.
    //      Types of property '[FlavorSymbolType]' are incompatible.
    //        Type '"UserName" | undefined' is not assignable to type
    //        '"Email" | undefined'.
    //          Type '"UserName"' is not assignable to type '"Email"'
    // @ts-expect-error See above comment
    const _email2: Email = userName2;
  });

  it('should widen to the unflavored type', () => {
    type UserName = Flavor<string, 'UserName'>;

    assertType<IsExact<Widen<UserName>, string>>(true);
  });
});
