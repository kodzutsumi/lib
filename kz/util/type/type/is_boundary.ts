// Copyright 2020 - present integereleven. All rights reserved. MIT license.
// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { LogicCapabilities, Or } from '@kz/util/logic';

import type { IsTypeCapabilities, IsTypeDefaultSettings } from './is_type.ts';
import type { IsTop } from './is_top.ts';
import type { IsBottom } from './is_bottom.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsBoundary<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = Or<
  IsTop<Type, Settings>,
  IsBottom<Type, Settings>,
  Extract<Settings, LogicCapabilities>
>;
