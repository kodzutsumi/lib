// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ListLike } from './list_like.ts';
import type { Last } from './ordinal.ts';

export type Tail<Type extends ListLike<unknown>> = Last<Type>;
