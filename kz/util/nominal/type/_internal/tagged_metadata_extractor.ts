// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Extends } from '@kz/util/type';
import type { TaggedSymbolType } from './constants.ts';
import type { TaggedType } from './tagged_type.ts';
import type { ConditionOf } from '@kz/util/capability';

export type TaggedMetadataExtractor<
  Type extends TaggedType<Name, unknown>,
  Name extends PropertyKey,
> = {
  [Key in keyof Type[typeof TaggedSymbolType]]: Extends<
    Key,
    Name,
    ConditionOf<
      Type[typeof TaggedSymbolType][Key],
      never
    >
  >;
}[keyof Type[typeof TaggedSymbolType]];
