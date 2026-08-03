// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TaggedSymbolType } from './constants.ts';
import type { UnionKeyOf } from './union_key_of.ts';

export type TaggedLike<Type> =
  & { [TaggedSymbolType]?: keyof Type }
  & Record<UnionKeyOf<Type>, PropertyKey>;
