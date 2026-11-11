// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { BrandSymbolType } from './constants.ts';

export type Branded<Type extends PropertyKey> = {
  readonly [BrandSymbolType]: Type;
};
