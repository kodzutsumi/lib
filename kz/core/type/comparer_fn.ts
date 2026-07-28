// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ComparisonResult } from './comparison_result.ts';

export type ComparerFn<Type> = (
  a: Type,
  b: Type,
  reverse?: boolean,
) => ComparisonResult;
