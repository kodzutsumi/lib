// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AnyRecord } from '@kz/util/object';

import type { InternalStringPath } from './_internal/mod.ts';

export type Paths<T extends AnyRecord> = keyof T extends string
  ? InternalStringPath<T> extends infer P ? P extends string | keyof T ? P
    : keyof T
  : keyof T
  : never;
