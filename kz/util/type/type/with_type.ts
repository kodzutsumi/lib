// Copyright 2020 - present integereleven. All rights reserved. MIT license.
import type {
  StandardCapabilities,
  StandardDefaultSettings,
  WithType as InternalWithType,
} from './_internal/with_type/mod.ts';

export type WithTypeCapabilities = StandardCapabilities;
export type WithTypeDefaultSettings = StandardDefaultSettings;

export type WithType<
  TargetType,
  Settings extends WithTypeCapabilities = WithTypeDefaultSettings,
> = InternalWithType<TargetType, Settings>;
