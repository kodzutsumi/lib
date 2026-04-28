// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type KeyedRecord<Value, Keys extends PropertyKey = PropertyKey> = Record<
  Keys,
  Value
>;
