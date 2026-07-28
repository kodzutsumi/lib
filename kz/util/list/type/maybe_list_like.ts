// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ListLike } from './list_like.ts';

export type MaybeListLike<Type> = Type | ListLike<Type>;
