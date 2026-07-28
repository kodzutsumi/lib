// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsUnknown, ToNull } from '@kz/util/type';

import type { ToJsonValue } from '../to_json_value.ts';
import type { Unserializable } from './unserializable.ts';

export type SerializeList<Type extends unknown[]> = Type extends readonly []
  ? []
  : Type extends readonly [infer Element, ...infer Rest]
    ? [ToNull<Element>, ...SerializeList<Rest>]
  : IsUnknown<Type[number]> extends true ? []
  : Array<
    Type[number] extends Unserializable ? null
      : ToJsonValue<ToNull<Type[number]>>
  >;
