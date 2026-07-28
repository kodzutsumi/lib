// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from './any.ts';
import type {
  WithType,
  WithTypeCapabilities,
  WithTypeDefaultSettings,
} from './with_type.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

type Capabilities = WithTypeCapabilities;
type DefaultSettings = WithTypeDefaultSettings;

export type WithAny<
  Settings extends Capabilities = DefaultSettings,
> = WithType<AnyType, Settings>;
