// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export function isUndefined<Type>(
  value: Type,
): value is Extract<Type, undefined> {
  return value === undefined;
}
