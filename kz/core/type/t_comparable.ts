// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ComparisonResult } from './comparison_result.ts';

export interface TComparable<Type> {
  compareTo(other: Type, reverse?: boolean): ComparisonResult;
}
