## Tagged

Functionally similar to a {@link Brand} with added optional assignment
of metadata, or an alternative type, to the tagged type.
It follows the same assignability rules as {@link Brand}.

### Assignability

Tagged types follow the same assignability rules as {@link Brand}.
Two tagged types are assignable to each other only if their tags
are identical.

```ts
import type { Tagged } from '@kz/util/nominal';
type UserName = Tagged<string, 'Email'>;
type Email = Tagged<string, 'Email'>;
const userName = 'rlevine@example.com' as UserName;
const email = userName as UserName;
const userName2 = email as Email;
```

A tagged sub-type is assignable to its tagged super-type, but a tagged
super-type is not assignable to its tagged sub-type.

```ts
import type { Tagged } from '@kz/util/nominal';
type UserName = Tagged<string, 'UserName'>;
type Email = Tagged<UserName, 'Email'>;
const email = 'lpollard@example.com' as Email;
const userName: UserName = email;
const userName2 = 'ecastro@example.com' as UserName;
//@ts-expect-error
const email2: Email = userName2;
```

As with most types, you can widen the type of a tagged type to its
untagged type using the {@link Widen} type.

```ts
import { assertType, IsExact } from '@std/testing/types';
import type { Widen } from '@kz/util/type';
import type { Tagged } from '@kz/util/nominal';
type UserName = Tagged<string, 'UserName'>;
type WidenedUserName = Widen<UserName>;
assertType<IsExact<WidenedUserName, string>>(true);
```

### Metadata

Tagged types allow for the assignment of metadata, or an alternative type,
to the tagged type.

```ts
import { assertEquals, assertExists } from '@std/assert';
import type { Tagged } from '@kz/util/nominal';
type UserInfo = { name: string; email: string };
type AdminInfo = { roles: string[] };
type UserId = Tagged<string, 'User', UserInfo>;
type AdminId = Tagged<UserId, 'Admin', AdminInfo>;
const userId = '5f4f3b2a4f3b2a4f3b2a4f3b' as UserId;
const adminId = '5f4f3b2a4f3b2a4f3b2a4f3c' as AdminId;
type ReturnType = { user: UserInfo; admin?: AdminInfo };
function GetrInfo(id: UserId): undefined | ReturnType {
  if (id === '5f4f3b2a4f3b2a4f3b2a4f3b') {
    return {
      user: {
        name: 'Mary Taylor',
        email: 'mtaylor@example.com',
      },
    };
  }
  if (id === '5f4f3b2a4f3b2a4f3b2a4f3c') {
    return {
      user: {
        name: 'Sutton Mooney',
        email: 'smooney@example.com',
      },
      admin: {
        roles: ['user-admin', 'service-manager'],
      },
    };
  }
  return undefined;
}
const userInfo = GetrInfo(userId);
const adminInfo = GetrInfo(adminId);
assertExists(userInfo);
assertEquals(userInfo.user.name, 'Mary Taylor');
assertExists(adminInfo);
assertEquals(adminInfo.user.name, 'Sutton Mooney');
assertExists(adminInfo.admin);
assertEquals(adminInfo.admin!.roles, ['user-admin', 'service-manager']);
```

#### Metadata extraction

You can extract the metadata of a tagged type using the
{@link ExtractTaggedMetadata} type.
Generally in creating tagged types, there is no need to extract the
metadata of a tagged type, as it is present at creation. However; in some
cases, such as tagged types from third-party codebases, you may need to
extract the metadata of a tagged type.

```ts
import { assertEquals, assertExists } from '@std/assert';
import type { ExtractTaggedMetadata, Tagged } from '@kz/util/nominal';
// From third party library
type UserInfo = { name: string; email: string };
type AdminInfo = { roles: string[] };
// Third party exports you have access to
type UserId = Tagged<string, 'User', UserInfo>;
type AdminId = Tagged<UserId, 'Admin', AdminInfo>;
// end third party library
type UserMetadata = ExtractTaggedMetadata<UserId, 'User'>;
type AdminMetadata = ExtractTaggedMetadata<AdminId, 'Admin'>;
type ReturnType = { user: UserMetadata; admin?: AdminMetadata };
function GetrInfo(id: UserId): undefined | ReturnType {
  if (id === '5f4f3b2a4f3b2a4f3b2a4f3b') {
    return {
      user: {
        name: 'Ray Levine',
        email: 'rlevine@example.com',
      },
    };
  }
  if (id === '5f4f3b2a4f3b2a4f3b2a4f3c') {
    return {
      user: {
        name: 'Lester Pollard',
        email: 'lpollard@example.com',
      },
      admin: {
        roles: ['user-admin', 'service-manager'],
      },
    };
  }
  return undefined;
}
const userInfo = GetrInfo('5f4f3b2a4f3b2a4f3b2a4f3b' as UserId);
const adminInfo = GetrInfo('5f4f3b2a4f3b2a4f3b2a4f3c' as UserId);
assertExists(userInfo);
assertEquals(userInfo.user.name, 'Ray Levine');
assertExists(adminInfo);
assertEquals(adminInfo.user.name, 'Lester Pollard');
assertExists(adminInfo.admin);
assertEquals(adminInfo.admin.roles, ['user-admin', 'service-manager']);
```

## Flavored

Create a flavored version of a type. This is a less strict version of
{@link Brand} that allows for the assignment of the unflavored value without
casting.

@example Simple flavor assignment

```ts
import type { Flavor } from '@kz/util/nominal';

type UserName = Flavor<string, 'Email'>;

const userName: UserName = 'apeterson@example.com';
```

### Assignability

Two flavored types are assignable to each other only if their flavors
are identical.

```ts
import type { Flavor } from '@kz/util/nominal';

type UserName = Flavor<string, 'Email'>;
type Email = Flavor<string, 'Email'>;

const userName: UserName = 'rcoffey@example.com';
const email: Email = userName;
const userName2: UserName = email;
```

A flavored sub-type is assignable to its flavored super-type, but a flavored
super-type is not assignable to its flavored sub-type.

```ts
import type { Flavor } from '@kz/util/nominal';

type UserName = Flavor<string, 'UserName'>;
type Email = Flavor<UserName, 'Email'>;

const email: Email = 'cstrickland@example.com';
const userName: UserName = email;

const userName2: UserName = 'gharrington@example.com';
//@ts-expect-error
const email2: Email = userName2;
```

The error above would read:

```
Type 'Flavor<string, "UserName">' is not assignable to type
'Flavor<Flavor<string, "UserName">, "Email">'.
  Type 'Flavor<string, "UserName">' is not assignable to type
  'Flavored<"Email">'.
    Types of property '[FlavorSymbolType]' are incompatible.
      Type '"UserName" | undefined' is not assignable to type
      '"Email" | undefined'.
        Type '"UserName"' is not assignable to type '"Email"'. deno-ts(2322)
```

As with most types, you can widen the type of a flavored type to its
unflavored type using the {@link Widen} type.

```ts
import { assertType, IsExact } from '@std/testing/types';
import type { Widen } from '@kz/util/type';
import type { Flavor } from '@kz/util/nominal';

type UserName = Flavor<string, 'UserName'>;
type WidenedUserName = Widen<UserName>;

assertType<IsExact<WidenedUserName, string>>(true);
```

## Brand

Create a branded version of a type.

In order to assign an unbranded value as a branded type, you must cast it.

```ts
import type { Brand } from '@kz/util/nominal';
type UserName = Brand<string, 'Email'>;
const userName = 'apeterson@example.com' as UserName;
```

### Assignability

Two branded types are assignable to each other only if their brands
are identical.

```ts
import type { Brand } from '@kz/util/nominal';
type UserName = Brand<string, 'Email'>;
type Email = Brand<string, 'Email'>;
const userName = 'rcoffey@example.com' as UserName;
const email: Email = userName;
const userName2: UserName = email;
```

A branded sub-type is assignable to its branded super-type, but a branded
super-type is not assignable to its branded sub-type.

```ts
import type { Brand } from '@kz/util/nominal';
type UserName = Brand<string, 'UserName'>;
type Email = Brand<UserName, 'Email'>;
const email = 'cstrickland@example.com' as Email;
const userName: UserName = email;
const userName2 = 'gharrington@example.com' as UserName;
//@ts-expect-error
const email2: Email = userName2;
```

The error above would read:

```
Type 'Brand<string, "UserName">' is not assignable to type 'never'.
  The intersection 'Brand<Brand<string, "UserName">, "Email">' was reduced
  to 'never' because property '[BrandSymbolType]' has conflicting types in
  some constituents. deno-ts(2322)
```

As with most types, you can widen the type of a branded type to its
unbranded type using the {@link Widen} type.

```ts
import { assertType, IsExact } from '@std/testing/types';
import type { Widen } from '@kz/util/type';
import type { Brand } from '@kz/util/nominal';
type UserName = Brand<string, 'UserName'>;
type WidenedUserName = Widen<UserName>;
assertType<IsExact<WidenedUserName, string>>(true);
```
