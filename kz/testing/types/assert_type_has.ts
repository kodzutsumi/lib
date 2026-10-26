import type { Has } from '@std/testing/types';

/**
 * Asserts that the type `T` has the type `U`.
 * @template T - The type to check.
 * @template U - The type that should be present in `T`.
 *
 * @param _expectTrue The expected result of the type comparison.
 */
export function assertTypeHas<T, U>(_expectTrue: Has<T, U>): void {}
