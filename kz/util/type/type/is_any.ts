// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { Of } from '@kz/util/capability';
import type { Any } from './any.ts';
import type {
  IsType,
  IsTypeCapabilities,
  IsTypeDefaultSettings,
} from './is_type.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsAny<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = IsType<AnyType, Settings & Of<Type>>;
