// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ToNull } from '@kz/util/type';

import type { ToJsonValue } from '../to_json_value.ts';
import type { GetSerializableKeys } from './get_serializable_keys.ts';
import type { Unserializable } from './unserializable.ts';

export type SerializeObject<Type extends object> = {
  [Key in keyof Pick<Type, GetSerializableKeys<Type>>]: Type[Key] extends
    Unserializable ? null
    : ToJsonValue<ToNull<Type[Key]>>;
};
