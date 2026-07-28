// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Nil } from './nil.ts';
import type {
  IsType,
  IsTypeCapabilities,
  IsTypeDefaultSettings,
} from './is_type.ts';

type Capabilities = IsTypeCapabilities;
type DefaultSettings = IsTypeDefaultSettings;

/**
 * Type checks a type against `Nil`, with options for strictness, distributive behavior, and more.
 *
 * @param Type - The type to check.
 * @param Settings - Optional settings to customize the type check behavior.
 * @returns A boolean type indicating whether `Type` is `Nil` based on the specified settings.
 */
export type IsNil<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = IsType<Type, Nil, Settings>;
