// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { JsonValue } from './json_value.ts';

export interface JsonSerializable<Type extends JsonValue = JsonValue> {
  toJSON(key?: string): Type;
}
