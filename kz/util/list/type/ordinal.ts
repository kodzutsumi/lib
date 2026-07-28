// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IndexInferer } from './_internal/mod.ts';
import type { ListLike } from './list_like.ts';

export type InferIndex<Type extends ListLike<unknown>, Index extends number> =
  IndexInferer<Type, Index>;

export type First<Type extends ListLike<unknown>> = InferIndex<Type, 0>;

export type Second<Type extends ListLike<unknown>> = InferIndex<Type, 1>;

export type Third<Type extends ListLike<unknown>> = InferIndex<Type, 2>;

export type Fourth<Type extends ListLike<unknown>> = InferIndex<Type, 3>;

export type Fifth<Type extends ListLike<unknown>> = InferIndex<Type, 4>;

export type Sixth<Type extends ListLike<unknown>> = InferIndex<Type, 5>;

export type Seventh<Type extends ListLike<unknown>> = InferIndex<Type, 6>;

export type Eighth<Type extends ListLike<unknown>> = InferIndex<Type, 7>;

export type Ninth<Type extends ListLike<unknown>> = InferIndex<Type, 8>;

export type Tenth<Type extends ListLike<unknown>> = InferIndex<Type, 9>;

export type Eleventh<Type extends ListLike<unknown>> = InferIndex<Type, 10>;

export type Twelfth<Type extends ListLike<unknown>> = InferIndex<Type, 11>;

export type Last<Type extends ListLike<unknown>> = Type extends
  [...unknown[], infer Last] ? Last : never;
