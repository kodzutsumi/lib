// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Widen } from '@kz/util/type';
import type { ExtractTaggedMetadata, Tagged } from '@kz/util/nominal';

describe('Tagged', () => {
  it('should create a Tagged type', () => {
    type UserName = Tagged<string, 'Email'>;

    assertType<Has<UserName, string>>(true);
  });

  it('should be able to assign a value with a type assertion', () => {
    type UserName = Tagged<string, 'Email'>;

    const userName = 'apeterson@example.com' as UserName;
    assertType<IsExact<typeof userName, UserName>>(true);
  });

  it('should allow sub-typing', () => {
    type UserName = Tagged<string, 'UserName'>;
    type Email = Tagged<UserName, 'Email'>;
    const email = 'rcoffey@example.com' as Email;
    const userName: UserName = email;

    assertType<IsExact<typeof userName, UserName>>(true);
    // Failure case
    const userName2 = 'cstrickland@example.com' as UserName;

    // Type 'string & TaggedType<"UserName", unknown>' is not assignable to
    // type 'string & TaggedType<"Email", unknown> & TaggedType<"UserName", unknown>'.
    //   Type 'string & TaggedType<"UserName", unknown>' is not assignable to
    //   type 'TaggedType<"Email", unknown>'.
    //     Types of property '[TaggedSymbolType]' are incompatible.
    //       Property 'Email' is missing in type '{ UserName: unknown; }' but
    //       required in type '{ Email: unknown; }'.
    // @ts-expect-error See above comment
    const _email2: Email = userName2;
  });

  it('should allow metadata', () => {
    type UserInfo = { name: string; email: string };
    type AdminInfo = { roles: string[] };
    type UserId = Tagged<string, 'User', UserInfo>;
    type AdminId = Tagged<UserId, 'Admin', AdminInfo>;

    assertType<Has<UserId, string>>(true);
    assertType<Has<AdminId, UserId>>(true);
    assertType<Has<ExtractTaggedMetadata<AdminId, 'User'>, UserInfo>>(true);
    assertType<Has<ExtractTaggedMetadata<AdminId, 'Admin'>, AdminInfo>>(true);
  });

  it('should widen to the untagged type', () => {
    type UserName = Tagged<string, 'UserName'>;

    assertType<IsExact<Widen<UserName>, string>>(true);
  });
});
