// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { FixedLengthArrayBuilder } from './_internal/mod.ts';

export type FixedLengthArray<Length extends number, Type = unknown> =
  FixedLengthArrayBuilder<Length, Type>;
