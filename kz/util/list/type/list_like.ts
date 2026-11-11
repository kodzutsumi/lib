// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type ListLike<Type = unknown> =
  | readonly Type[]
  | Iterable<Type>
  | ArrayLike<Type>;
