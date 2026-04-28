// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ConditionOf } from '@kz/util/capability';

import type { IsNever } from './is_never.ts';
import type { IsNull } from './is_null.ts';
import type { IsUndefined } from './is_undefined.ts';

export type ToNull<Type> = IsNull<
  Type,
  ConditionOf<
    null,
    IsNever<
      Type,
      ConditionOf<null, IsUndefined<Type, ConditionOf<null, Type>>>
    >
  >
>;
