// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Builtin } from './builtin.ts';
import type {
  WithType,
  WithTypeCapabilities,
  WithTypeDefaultSettings,
} from './with_type.ts';

type Capabilities = WithTypeCapabilities;
type DefaultSettings = WithTypeDefaultSettings;

export type WithBuiltin<
  Settings extends Capabilities = DefaultSettings,
> = WithType<Builtin, Settings>;
