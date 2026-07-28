// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  WithType,
  WithTypeCapabilities,
  WithTypeDefaultSettings,
} from './with_type.ts';

type Capabilities = WithTypeCapabilities;
type DefaultSettings = WithTypeDefaultSettings;

export type WithUnknown<
  Settings extends Capabilities = DefaultSettings,
> = WithType<unknown, Settings>;
