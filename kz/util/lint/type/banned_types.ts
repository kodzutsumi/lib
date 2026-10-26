// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file ban-types no-explicit-any

/**
 * A mapping of banned types to their corresponding TypeScript types.
 */
export type BannedTypes = {
  any: any;

  Function: Function;

  Boolean: Boolean;

  Number: Number;

  String: String;

  Symbol: Symbol;

  Object: Object;

  '{}': {};
};
