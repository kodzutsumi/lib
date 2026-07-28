// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ComparisonResult } from './comparison_result.ts';

export interface TComparer<Type> {
  compare(a: Type, b: Type, reverse?: boolean): ComparisonResult;
}
