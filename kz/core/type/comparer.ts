// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ComparerFn } from './comparer_fn.ts';
import type { TComparer } from './t_comparer.ts';

export type Comparer<Type> = TComparer<Type> | ComparerFn<Type>;
