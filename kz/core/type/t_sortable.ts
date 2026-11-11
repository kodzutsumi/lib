// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Comparer } from './comparer.ts';

export interface TSortable<Type> {
  sort(comparer: Comparer<Type>, reverse?: boolean): void;
}
