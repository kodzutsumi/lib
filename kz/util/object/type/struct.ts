// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Tagged } from '@kz/util/nominal';

import type { StructSymbolType } from './_internal/mod.ts';
import type { KeyedRecord } from './keyed_record.ts';

export type Struct<
  Name extends PropertyKey,
  Fields extends KeyedRecord<unknown>,
> = Fields extends KeyedRecord<unknown>
  ? Tagged<Fields, typeof StructSymbolType | Name, Fields>
  : never;
