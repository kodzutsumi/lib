// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { JsonSerializable } from '@kz/util/json';

export interface TBase extends JsonSerializable {
  [Symbol.toPrimitive](hint: string): string | number;

  toString(): string;

  valueOf(): number;
}
