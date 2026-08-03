import type { $UseStreamKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for streaming or predicate behavior.
 *
 * Use this capability consumer to indicate that a type supports both streaming or
 * predicate behavior, or results in a streaming or predicate type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsStream} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsPredicate} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsStream - The boolean setting for this capability consumer.
 */
export type $UseStream<AsStream extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseStream` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseStreamKeyString]: AsStream;
};
