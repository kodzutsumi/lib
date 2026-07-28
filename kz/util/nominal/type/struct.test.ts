// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';

import type { Widen } from '@kz/util/type';
import type { Struct } from '@kz/util/nominal';

describe('Struct', () => {
  it('should create a struct type', () => {
    type User = Struct<'User', { name: string; age: number }>;

    assertType<Has<User, { name: string; age: number }>>(true);
  });

  it('should be able to assign a value with a type assertion', () => {
    type User = Struct<'User', { name: string; age: number }>;

    const user = { name: 'Ada', age: 36 } as User;
    assertType<IsExact<typeof user, User>>(true);
  });

  it('should allow sub-typing', () => {
    type User = Struct<'User', { name: string; age: number }>;
    type Admin = Struct<'Admin', User & { roles: string[] }>;

    const admin = {
      name: 'Grace',
      age: 41,
      roles: ['owner'],
    } as Admin;
    const user: User = admin;

    assertType<IsExact<typeof user, User>>(true);

    // Failure case
    const user2 = {
      name: 'Linus',
      age: 55,
    } as User;

    // Type 'Struct<"User", { name: string; age: number; }>' is not assignable to
    //   type 'Struct<"Admin", User & { roles: string[]; }>'.
    // @ts-expect-error See above comment
    const _admin2: Admin = user2;
  });

  it('should widen to the unstructured type', () => {
    type User = Struct<'User', { name: string; age: number }>;
    type WidenedUser = Widen<User>;

    assertType<Has<WidenedUser, { name: string; age: number }>>(true);
  });
});
