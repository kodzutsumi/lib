// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { TypedArray } from '@kz/util/list';
// import type { AnyInfinity } from '@kz/util/numeric';
// import type { EmptyRecord, StringKeyedRecord } from '@kz/util/object';
// import type { Any as $Any, IsAny } from '@kz/util/type';

// import type {
//   SerializeList,
//   SerializeObject,
//   Unserializable,
// } from './_internal/mod.ts';
// import type { JsonSerializable } from './json_serializable.ts';
// import type { JsonValue } from './json_value.ts';

// type Any = $Any<'#i11n:utilities:return_passed_any'>;

// export type ToJsonValue<Type> = IsAny<Type> extends true ? Any
//   : Type extends AnyInfinity ? null
//   : Type extends JsonSerializable<infer U>
//     ? (() => U) extends () => JsonValue ? U
//     : ToJsonValue<U>
//   : Type extends number | string | boolean ? Type
//   : Type extends Map<unknown, unknown> | Set<unknown> ? EmptyRecord
//   : Type extends TypedArray ? StringKeyedRecord<number>
//   : Type extends Unserializable ? never
//   : Type extends unknown[] ? SerializeList<Type>
//   : Type extends object ? SerializeObject<Type>
//   : never;
