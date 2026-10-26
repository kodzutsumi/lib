import type { IsExact } from '@std/testing/types';

/**
 * Asserts that the type `T` is exactly the type `U`.
 *
 * @template T - The type to check.
 * @template U - The type that `T` should exactly match.
 *
 * @param _expectTrue The expected result of the comparison.
 */
export function assertTypeIs<T, U>(_expectTrue: IsExact<T, U>): void {}
