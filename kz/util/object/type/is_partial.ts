// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Extends } from '@kz/util/type';
import type { ConditionOf, UseElse, UseThen } from '@kz/util/capability';

type Options = UseThen | UseElse;
type Defaults = ConditionOf<true, false>;

export type IsPartial<
  Type,
  $Options extends Options = Defaults,
> = Extends<[Partial<Type>], [Type], $Options>;
