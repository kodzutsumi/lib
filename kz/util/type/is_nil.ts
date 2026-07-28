// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Nil } from './type/mod.ts';

export function isNil(value: unknown): value is Nil {
  return value === null || value === undefined;
}
