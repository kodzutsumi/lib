// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Extends } from '@kz/util/type';
import type { ConditionOf } from '@kz/util/capability';

export type Merge<Type> = Extends<
  Type,
  Type,
  ConditionOf<{ [K in keyof Type]: Type[K] }, never>
>;
