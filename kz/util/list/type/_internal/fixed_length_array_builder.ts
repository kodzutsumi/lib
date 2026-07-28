// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * @internal
 * @since 0.0.1
 */
export type FixedLengthArrayBuilder<
  Length extends number,
  Type = unknown,
  Accumulator extends readonly unknown[] = [],
> = Accumulator['length'] extends Length ? Accumulator
  : FixedLengthArrayBuilder<Length, Type, [...Accumulator, Type]>;
