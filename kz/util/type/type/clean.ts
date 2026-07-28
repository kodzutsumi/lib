// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Permit } from '@kz/util/lint';
import type {
  ConditionOf,
  DecrementDepth,
  IsDeep,
  LevelOf,
  UseDepth,
} from '@kz/util/capability';

type CleanOptions = UseDepth;
type Defaults = LevelOf<1>; // Clean at least one nested level
type NonNil = Permit<'{}', '#i11n:utilities:denillify'>;

export type Clean<Type, Options extends CleanOptions = Defaults> = Type extends
  object ? {
    [Key in keyof Type]: IsDeep<
      Options,
      ConditionOf<Clean<Type[Key], DecrementDepth<Options>>, Type[Key]>
    >;
  }
  : Type extends Array<infer Item> ? Array<
      IsDeep<
        Options,
        ConditionOf<Clean<Item, DecrementDepth<Options>>, Item>
      >
    >
  :
    & Type
    & NonNil;
