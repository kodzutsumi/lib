import type { $AsSetter } from '@kz/util/capability';
import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { RetrieveValue } from './retrieve_value.ts';
import type { UpdateValue } from './update_value.ts';

/**
 * Handles the routing of type modifiers based on the specified capabilities in the `Settings`. If the `$AsSetter` capability is present, it routes to the `UpdateValue` type modifier, allowing for updates to the value. Otherwise, it defaults to the `RetrieveValue` type modifier, which is used for retrieving values. This type serves as a central point for determining how to handle a value based on its capabilities, ensuring that the appropriate type modifier is applied in each case.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type of the value being handled.
 * @template Settings - A combination of capabilities that determine the behavior of the type modifier (default is `DefaultSettings`).
 * @returns The appropriate type modifier based on the specified settings and capabilities.
 * @internal
 */
export type HandleAsValue<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends $AsSetter ? UpdateValue<TargetType, OfType, Settings>
  : RetrieveValue<TargetType, OfType, Settings>;
