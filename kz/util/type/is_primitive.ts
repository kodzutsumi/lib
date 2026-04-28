// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { isNil } from './is_nil.ts';
import { isScalar } from './is_scalar.ts';
import type { Primitive } from './type/mod.ts';

export function isPrimitive<Type>(
  value: Type,
): value is Extract<Type, Primitive> {
  return isScalar(value) || isNil(value);
}
