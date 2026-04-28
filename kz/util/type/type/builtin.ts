// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Permit } from '@kz/util/lint';

import type { Primitive } from './primitive.ts';

type AnyCallable = Permit<'Function', '#i11n:utilities:all_types'>;

export type Builtin =
  | Primitive
  | AnyCallable
  | Date
  | RegExp
  | Error
  | Generator
  | { readonly [Symbol.toStringTag]: string };
