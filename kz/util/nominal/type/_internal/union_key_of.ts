// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TaggedSymbolType } from './constants.ts';

export type UnionKeyOf<Type> = Type extends
  { [TaggedSymbolType]?: infer Value extends keyof Type } ? Value : never;
