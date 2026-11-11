// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { JsonValue } from './json_value.ts';

export type JsonObject =
  & { [Key in string]: JsonValue }
  & { [Key in string]?: JsonValue };
