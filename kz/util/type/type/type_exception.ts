import type { Brand } from '@kz/util/nominal';
import type { KnownTypeExceptions } from './_internal/mod.ts';

export type TypeException<Type, Message extends string> = Message extends
  keyof KnownTypeExceptions ? Brand<{
    exception: true;
    referenceType: Type;
    message: KnownTypeExceptions[Message];
    url: `https://docs.i11n.io/ex2/ts/${Message}`;
  }, 'TypeException'>
  : Brand<{
    exception: true;
    referenceType: Type;
    message: Message;
    url: `https://docs.i11n.io/ex2/ts/0x0?message=${Message}`;
  }, 'TypeException'>;
// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * @internal
 * @since 0.0.1
 */
export const I11N_DOCS_HOST = 'https://docs.i11n.io';

/**
 * @internal
 * @since 0.0.1
 */
export const I11N_EX2_PATH = 'ex2';
