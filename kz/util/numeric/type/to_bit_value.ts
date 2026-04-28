// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ToBoolean } from '@kz/util/boolean';

export type ToBitValue<Type> = ToBoolean<Type> extends true ? 1 : 0;
