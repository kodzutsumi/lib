import type { $AsSetter, $CollectionTarget } from '@kz/util/capability';
import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { UpdateCollection } from './update_collection.ts';
import type { RetrieveCollection } from './retrieve_collection.ts';

/**
 * Handles the routing of type modifiers for collection types based on the specified capabilities in the `Settings`. If the `$AsSetter` capability is present, it routes to the `UpdateCollection` type modifier, which is responsible for handling updates to collection types. If the `$AsSetter` capability is not present, it routes to the `RetrieveCollection` type modifier, which is responsible for handling retrieval of collection types. This type ensures that the appropriate type modifier is used based on whether the operation is a getter or a setter, and it also takes into account any additional capabilities specified in the `Settings`.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type of the elements in the collection.
 * @template Target - The specific collection target being handled (e.g., 'collection', 'array', etc.).
 * @template Settings - A combination of capabilities that determine the behavior of the type modifier (default is `DefaultSettings`).
 * @returns The appropriate type modifier based on the specified settings and capabilities.
 * @internal
 */
export type HandleAsCollection<
  TargetType,
  OfType,
  Target extends $CollectionTarget,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends $AsSetter ? UpdateCollection<TargetType, OfType, Settings>
  : RetrieveCollection<TargetType, OfType, Target, Settings>;
