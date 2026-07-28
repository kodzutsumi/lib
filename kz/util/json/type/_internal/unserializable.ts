// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any as $Any } from '@kz/util/type';

type Any = $Any<'#i11n:utilities:all_types'>;

export type Unserializable =
  | ((...a: unknown[]) => Any)
  | undefined
  | symbol;
