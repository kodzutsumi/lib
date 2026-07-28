// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Scalar } from './scalar.ts';
import type {
  WithType,
  WithTypeCapabilities,
  WithTypeDefaultSettings,
} from './with_type.ts';

type Capabilities = WithTypeCapabilities;
type DefaultSettings = WithTypeDefaultSettings;

export type WithScalar<
  Settings extends Capabilities = DefaultSettings,
> = WithType<Scalar, Settings>;
