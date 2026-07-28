// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { FlavorSymbolType } from './constants.ts';

export type Flavored<Type> = {
  readonly [FlavorSymbolType]?: Type;
};
