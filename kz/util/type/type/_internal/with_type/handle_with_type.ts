import type { UseCollection } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { HandleAsCollection } from './handle_as_collection.ts';
import type { HandleAsValue } from './handle_as_value.ts';

/**
 * Handles the routing of type modifiers based on the nature of the `TargetType` and the specified capabilities in the `Settings`. If the `UseCollection` capability is present, it routes to the `HandleAsCollection` type modifier, which is designed to handle collections of values. Otherwise, it defaults to the `HandleAsValue` type modifier, which is used for handling individual values. This type serves as a central point for determining how to handle a value based on its type and capabilities, ensuring that the appropriate type modifier is applied in each case.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type of the value being handled.
 * @template Settings - A combination of capabilities that determine the behavior of the type modifier (default is `DefaultSettings`).
 * @returns The appropriate type modifier based on the specified settings and capabilities.
 * @internal
 */
export type HandleWithType<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends UseCollection<infer Target>
  ? HandleAsCollection<TargetType, OfType, Target, Settings>
  : HandleAsValue<TargetType, OfType, Settings>;
