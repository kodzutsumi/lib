// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ListLike } from './list_like.ts';
import type { First } from './ordinal.ts';

export type Head<Type extends ListLike<unknown>> = First<Type>;
