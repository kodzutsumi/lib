import type { $UseVoteKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for boolean vote behavior.
 *
 * The boolean vote behavior is a special capability for for boolean votes in
 * logic. It basically defines how a type should handle multiple operands where
 * a `boolean` result may be present. A  `boolean` result has a "vote" for both
 * `true` and `false`, and would generally result in `boolean` result when
 * unionized with `true` or `false`.
 *
 * This capability allow retention of the unionization to `boolean`, or to side
 * with the majority. e.g. Operands of `boolean` and `true` would rule in favor
 * of `true`, and `boolean` and `false` would rule in favor of `false`.
 *
 * This capability leaves resolution of ties (operands of `boolean`/`boolean` or
 * `true/`false`) to the {@linkcode UseUnsafe} capability or consideration in
 * implementing types.
 *
 * Use this capability consumer to indicate that a type supports boolean vote behavior.
 *
 * @see {@linkcode $AsMajority} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsRunoff} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsMajority - The boolean setting for this capability consumer.
 */
export type $UseVote<AsMajority extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseVote` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseVoteKeyString]: AsMajority;
};
