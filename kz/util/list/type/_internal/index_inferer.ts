// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ListLike } from '../list_like.ts';

/**
 * @internal
 * @since 0.0.1
 */
export type IndexInferer<
  Type extends ListLike<unknown>,
  Index extends number,
  Accumulator extends unknown[] = [],
> = Accumulator['length'] extends Index
  ? Type extends readonly [infer First, ...unknown[]] ? First
  : never
  : Type extends readonly [infer First, ...infer Rest]
    ? IndexInferer<Rest, Index, [First, ...Accumulator]>
  : never;
