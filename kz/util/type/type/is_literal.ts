// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { If, LogicCapabilities } from '@kz/util/logic';

import type { IsTypeCapabilities, IsTypeDefaultSettings } from './is_type.ts';
import type { Scalar } from './scalar.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

export type IsLiteral<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = If<
  LiteralCheck<Type>,
  Extract<Settings, LogicCapabilities>
>;

type LiteralCheck<T> = T extends Scalar ? number extends T ? false
  : boolean extends T ? false
  : bigint extends T ? false
  : string extends T ? false
  : symbol extends T ? false
  : true
  : false;

type Test = LiteralCheck<Record<string, number>>; // true
