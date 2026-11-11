// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsAny } from '@kz/util/type';

import type { AnyRecord } from '../any_record.ts';

export type ExtractPath<T extends AnyRecord, K extends keyof T> = K extends
  string
  ? IsAny<Required<T>[K]> extends true ? K : Required<T>[K] extends AnyRecord ?
      | `${K}.${
        & ExtractPath<
          Required<T>[K],
          Exclude<keyof Required<T>[K], keyof []>
        >
        & string}`
      | `${K}.${Exclude<keyof Required<T>[K], keyof []> & string}`
  : K
  : K;
