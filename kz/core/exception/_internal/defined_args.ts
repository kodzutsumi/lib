// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export function definedArgs(...args: unknown[]): boolean {
  for (const arg of args) {
    if (typeof arg === 'number') continue;
    if (!(arg ?? false)) {
      return false;
    }
  }

  return true;
}
