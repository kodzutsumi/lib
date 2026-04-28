// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { IsNever } from './is_never.ts';
import type { IsTypeCapabilities, IsTypeDefaultSettings } from './is_type.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsBottom<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = IsNever<Type, Settings>;
