// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsAny } from './is_any.ts';

export type IsSpecial<Type> = IsAny<Type> extends true ? false
  : [Type, unknown] extends [unknown, Type] ? true
  : [Type, never] extends [never, Type] ? true
  : [Type, void] extends [void, Type] ? true
  : false;
