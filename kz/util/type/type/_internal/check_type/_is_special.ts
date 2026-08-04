import type { _IsAny } from './_is_any.ts';

/**
 * Checks if a type is a special type (`unknown`, `never`, or `void`).
 * 
 * The `any` type is not considered a special type, here, as it has its own dedicated type check.
 * 
 * @template Type - The type to check.
 * @returns `true` if the type is a special type, otherwise `false`.
 * @internal
 */
export type _IsSpecial<Type> = _IsAny<Type> extends true ? true
  : [Type, unknown] extends [unknown, Type] ? true
  : [Type, never] extends [never, Type] ? true
  : [Type, void] extends [void, Type] ? true
  : false;
