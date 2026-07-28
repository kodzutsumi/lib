// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ConditionOf } from '@kz/util/capability';
import type { Extends } from '@kz/util/type';

import type { Falsy } from './falsy.ts';

export type ToBoolean<Type> = Extends<Type, Falsy, ConditionOf<false, true>>;
