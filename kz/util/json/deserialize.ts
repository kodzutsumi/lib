// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { Any as $Any } from '@kz/util/type';

// import type { JsonOf, JsonValue } from './type/mod.ts';
// import type { ExtractTaggedMetadata } from '@kz/util/nominal';

// type Any = $Any<'#i11n:utilities:all_types'>;

// export function deserialize<
//   Type extends JsonOf<Any> | string,
// >(
//   json: Type,
// ): Type extends JsonOf<Any> ? ExtractTaggedMetadata<Type, 'JSON'>
//   : JsonValue {
//   return JSON.parse(json) as Type extends JsonOf<Any>
//     ? ExtractTaggedMetadata<Type, 'JSON'>
//     : JsonValue;
// }
