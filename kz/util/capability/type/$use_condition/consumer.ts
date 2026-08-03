import type { $UseElse } from '../$use_else/mod.ts';
import type { $AsLoose, $AsStrict, $UseStrict } from '../$use_strict/mod.ts';
import type { $UseThen } from '../$use_then/mod.ts';

type CapSet = $UseStrict;
type Defaults = $AsLoose;

/**
 * A special capability for the {@linkcode $Then} and {@linkcode $Else} capabilities that allows for conditional types.
 *
 * This capability is unique in that it can be used to create conditional types based on the value of the capability
 * setting, allowing for more flexible and powerful type definitions.
 *
 * Using {@linkcode $$AsStrict} in the `Settings` will result in an intersection of {@linkcode $UseThen} and
 * {@linkcode $UseElse}, while using {@linkcode $$AsLoose} (the default) will result in a union of {@linkcode $UseThen}
 * and {@linkcode $UseElse}.
 *
 * @template Settings - The capability settings, which can be either {@linkcode $$AsLoose} (the default) or {@linkcode $$AsStrict}.
 */
export type $UseCondition<
  Settings extends CapSet = Defaults,
> = Settings extends $AsStrict ? $UseThen & $UseElse
  : $UseThen | $UseElse;
