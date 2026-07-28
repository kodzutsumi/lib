// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type SymbolKeyedRecord<Value, Keys extends symbol = symbol> = Record<
  Keys,
  Value
>;
