// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type Unpack<Type> = Type extends Array<infer Item> ? Item
  : Type extends ReadonlyArray<infer Item> ? Item
  : Type extends Promise<infer Item> ? Item
  : Type extends (...args: unknown[]) => infer Item ? Item
  : Type;
