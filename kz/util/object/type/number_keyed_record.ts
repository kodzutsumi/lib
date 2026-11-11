// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type NumberKeyedRecord<Value, Keys extends number = number> = Record<
  Keys,
  Value
>;
