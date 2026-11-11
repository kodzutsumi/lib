// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicCapabilities, Or } from '@kz/util/logic';

import type { IsAny } from './is_any.ts';
import type { IsUnknown } from './is_unknown.ts';
import type { IsTypeCapabilities, IsTypeDefaultSettings } from './is_type.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsTop<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = Or<
  IsAny<Type, Settings>,
  IsUnknown<Type, Settings>,
  Extract<Settings, LogicCapabilities>
>;
