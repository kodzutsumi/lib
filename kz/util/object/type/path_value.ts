// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AnyRecord } from '@kz/util/object';

import type { Paths } from './paths.ts';

export type PathValue<
  T extends AnyRecord = AnyRecord,
  P extends Paths<T> = Paths<T>,
> = P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? R extends Paths<Required<T>[K]> ? PathValue<Required<T>[K], R>
    : never
  : never
  : P extends keyof Required<T> ? Required<T>[P]
  : never;
