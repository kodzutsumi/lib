// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type StringKeyedRecord<Value, Keys extends string = string> = Record<
  Keys,
  Value
>;
