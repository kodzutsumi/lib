import type {
  $UseCondition,
  $UseInverted,
  $UseNullSetting,
  $UseUnsafe,
  $UseVote,
} from '@kz/util/capability';

/**
 * The set of capabilities that can be used to modify the behavior of logic types such as `If` and `Not`.
 *
 * @example //TODO(@ebntly): Add an example
 *
 * ## Capabilities
 * | Capability | Description |
 * |------------|-------------|
 * | {@linkcode $UseCondition} | Enables conditional logic based on the operand's value. |
 * | {@linkcode $UseInverted} | Inverts the result of the logical operation. |
 * | {@linkcode $UseUnsafe} | Determines whether to convert `boolean` results to `true`.  |
 * | {@linkcode $UseVote} | Enables voting logic, where multiple boolean values can be combined to determine a final result. |
 * | {@linkcode $UseNullSetting} | Allows for an empty set of capability settings |
 */
export type LogicCapabilities =
  | $UseCondition
  | $UseInverted
  | $UseUnsafe
  | $UseVote
  | $UseNullSetting;
