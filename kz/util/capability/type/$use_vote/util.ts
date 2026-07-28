import type { $AsMajority, $AsRunoff } from './broker.ts';
import type { $UseVote } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseVote} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseVote} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseVote} value from.
 * @template Default - The default value to use if the {@linkcode $UseVote} value is not present.
 * @returns The extracted {@linkcode $UseVote} value.
 */
export type $GetVote<Settings, Default extends boolean = false> =
  Settings extends $UseVote<infer AsMajority> ? AsMajority
    : Default;

/**
 * Extracts the {@linkcode $UseVote} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseVote} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseVote} setting from.
 * @template Default - The default value to use if the {@linkcode $UseVote} setting is not present.
 * @returns The extracted {@linkcode $UseVote} setting.
 */
export type $PickVote<Settings, Default extends boolean = false> = $UseVote<
  $GetVote<Settings, Default>
>;

type Capabilities = $UseVote;
type Defaults = $AsRunoff;

/**
 * Resolves a {@linkcode $UseVote} value to a boolean value based on the
 * specified voting capabilities.
 *
 * Some logic result pairs can result in a non-unanimous majority for a
 * specific boolean result vote, which is represented by the `$UseVote` type.
 * This type can be resolved to the majority boolean value based on the voting
 * capabilities specified in the settings.
 *
 * Note that there are some cases where the vote may have no majority, and will
 * result in a `boolean` type instead of a specific `true` or `false` value.
 *
 * ## Capabilities
 * - {@linkcode $UseVote} - Determines whether to resolve to the majority vote or return a boolean when there is no majority.
 *
 * ### Default/implied
 * - {@linkcode $AsRunoff} - Default and implied setting where non-unanimous votes result in a result of `boolean`.
 *
 * @template Operand - The boolean operand or vote to evaluate.
 * @template Settings - The capabilities settings.
 * @returns The resolved boolean value based on the operand and settings.
 */
export type $Vote<
  Operand extends boolean | $UseVote,
  Settings extends Capabilities = Defaults,
> = Operand extends $UseVote<infer Vote> ? Settings extends $AsMajority ? Vote
  : boolean
  : Operand;
