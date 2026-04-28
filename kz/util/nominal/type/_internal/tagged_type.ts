// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { TagWrapper } from './tag_wrapper.ts';

export type TaggedType<Name extends PropertyKey, Type> = TagWrapper<
  { [Key in Name]: Type }
>;
