import {
  type TestDecorator,
  TestGroup,
  type TestLabel,
} from '@kz/testing/suite';

/**
 * Creates test group decorators based on the provided descriptors.
 *
 * @param descriptors An object mapping keys to test labels.
 * @returns An object mapping the same keys to test group decorators.
 */
export function createGroups<
  Type extends Record<string, unknown>,
  Args extends unknown[] = unknown[],
>(
  descriptors: {
    [Key in keyof Type]: TestLabel;
  },
): Record<keyof Type, TestDecorator<Args>> {
  const groups = Object
    .fromEntries(
      Object.entries(descriptors).map((
        [key, value],
      ) => [key, TestGroup(value)]),
    ) as Record<keyof Type, TestDecorator<Args>>;
  return groups;
}
