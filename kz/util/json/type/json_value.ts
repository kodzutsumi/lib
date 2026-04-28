// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { JsonArray } from './json_array.ts';
import type { JsonObject } from './json_object.ts';
import type { JsonPrimitive } from './json_primitive.ts';
import type { JsonSerializable } from './json_serializable.ts';

export type JsonValue =
  | JsonPrimitive
  | JsonObject
  | JsonArray
  | JsonSerializable;
