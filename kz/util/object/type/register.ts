// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { AnyKey } from './any_key.ts';

export type Register<T, K extends AnyKey = AnyKey> = { [key in K]: T };
