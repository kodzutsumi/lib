import { Take, type TakeExtensions, type TestLabel } from '@kz/testing/suite';

/**
 * Creates `Take` decorators based on the provided descriptors.
 *
 * @param descriptors The object mapping keys to test labels or arrays of test labels.
 * @returns An object mapping the same keys to `TakeExtensions`.
 */
export function createTakes<Type extends Record<string, unknown>>(
  descriptors: {
    [Key in keyof Type]: TestLabel | TestLabel[];
  },
): Record<keyof Type, TakeExtensions> {
  const inputs = Object
    .fromEntries(
      Object.entries(descriptors).map((
        [key, value],
      ) => [key, Take(...(Array.isArray(value) ? value : [value]))]),
    ) as Record<keyof Type, TakeExtensions>;
  return inputs;
}
