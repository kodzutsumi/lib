// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { JsonValue } from '@kz/util/json';
// import type { StringKeyedRecord } from '@kz/util/object';
// import type { Any } from '@kz/util/type';

// import type { Converter, TKzObject } from './type/mod.ts';

// export abstract class AbstractKzObject<
//   ConversionMap extends StringKeyedRecord<Any<'#i11n:utilities:all_types'>>,
// > implements TKzObject<ConversionMap> {
//   public abstract toString(): string;

//   public abstract valueOf(): number;

//   public abstract convertTo<ConversionKey extends keyof ConversionMap>(
//     toType: ConversionKey,
//   ): ConversionMap[ConversionKey];

//   public [Symbol.toPrimitive](hint: string): string | number {
//     if (hint === 'number') return this.valueOf();

//     return this.toString();
//   }

//   public convert<ToType>(converter: Converter<number, ToType>): ToType {
//     const value = this.valueOf();

//     return typeof converter === 'function'
//       ? converter(value)
//       : converter.convert(value);
//   }

//   public toJSON(_key?: string): JsonValue {
//     const value = this[Symbol.toPrimitive]('number');
//     const numeric = this.valueOf();
//     const string = this.toString();

//     if (typeof value === 'number' && !isNaN(value)) return value;

//     if (typeof numeric === 'number' && !isNaN(numeric)) return numeric;

//     return string.length > 0 ? string : null;
//   }
// }
