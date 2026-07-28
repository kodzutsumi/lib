// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Scalar } from '@kz/util/type';

const scalarTypes = ['string', 'symbol', 'number', 'bigint', 'boolean'];

export function isScalar<Type>(value: Type): value is Extract<Type, Scalar> {
  const typeOfValue = typeof value;

  return scalarTypes.includes(typeOfValue);
}
