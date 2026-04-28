// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { KeyedRecord } from '@kz/util/object';
import type { Tagged } from './tagged.ts';
import type { StructSymbolType } from './_internal/mod.ts';

/**
 * Creates a struct type with a unique name and specified fields, allowing for nominal typing while maintaining the structure of the underlying fields. The struct is tagged with a specific symbol to enable type extraction and discrimination.
 *
 * @template Name - A unique identifier for the struct, typically a string literal type.
 * @template Fields - A record type representing the fields of the struct, where each property key is a field name and its corresponding value is the field type.
 * @returns A new struct type that combines the specified fields with a unique name, allowing for nominal typing while preserving the structure of the fields.
 */
export type Struct<
  Name extends PropertyKey,
  Fields extends KeyedRecord<unknown>,
> = Fields extends KeyedRecord<unknown>
  ? Tagged<Fields, typeof StructSymbolType | Name, Fields>
  : never;
