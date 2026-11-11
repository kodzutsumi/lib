// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export interface TConverter<FromType, ToType> {
  convert(value: FromType): ToType;
}
