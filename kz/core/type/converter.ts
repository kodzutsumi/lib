// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { ConverterFn } from './converter_fn.ts';
import type { TConverter } from './t_converter.ts';

export type Converter<FromType, ToType> =
  | TConverter<FromType, ToType>
  | ConverterFn<FromType, ToType>;
