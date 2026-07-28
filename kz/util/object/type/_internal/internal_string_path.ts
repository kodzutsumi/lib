// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AnyRecord } from '../any_record.ts';
import type { ExtractPath } from './extract_path.ts';

export type InternalStringPath<T extends AnyRecord> =
  | ExtractPath<T, keyof T>
  | keyof T;
