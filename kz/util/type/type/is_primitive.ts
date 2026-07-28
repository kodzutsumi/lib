// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Primitive } from './primitive.ts';
import type {
  IsType,
  IsTypeCapabilities,
  IsTypeDefaultSettings,
} from './is_type.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsPrimitive<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = IsType<Type, Primitive, Settings>;
