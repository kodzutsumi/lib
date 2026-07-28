// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Builtin } from './builtin.ts';
import type {
  IsType,
  IsTypeCapabilities,
  IsTypeDefaultSettings,
} from './is_type.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsBuiltin<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = IsType<Type, Builtin, Settings>;
