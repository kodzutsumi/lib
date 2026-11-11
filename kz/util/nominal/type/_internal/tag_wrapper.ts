// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TaggedSymbolType } from './constants.ts';

export type TagWrapper<Type> = {
  readonly [TaggedSymbolType]: Type;
};
