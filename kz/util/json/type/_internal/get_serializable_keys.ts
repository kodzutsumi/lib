// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Unserializable } from './unserializable.ts';

export type GetSerializableKeys<Type extends object> = {
  [Key in keyof Type]: Type[Key] extends Unserializable ? never : Key;
}[keyof Type];
