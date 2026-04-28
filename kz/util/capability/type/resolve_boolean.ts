// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { AsInverted } from './use_inversion.ts';

export type ResolveBoolean<
  Operand extends boolean,
  Settings extends CapSet,
> = Settings extends AsInverted ? Operand extends true ? false : true
  : Operand;
