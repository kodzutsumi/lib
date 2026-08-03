import type { $DepthLevel } from './consumer.ts';
import type { $UseDepth } from './consumer.ts';

/**
 * The collection behavior broker of the {@linkcode $UseDepth} capability.
 *
 * Use this setting to specify the deep (`true`) target for a type that supports the {@linkcode $UseDepth} capability consumer.
 *
 * @see {@linkcode $AsShallow} for the shallow behavior broker of this capability.
 * @see {@linkcode $Level} for the depth level behavior broker of this capability.
 */
export type $AsDeep = $UseDepth<true>;

/**
 * The depth level behavior broker of the {@linkcode $UseDepth} capability.
 *
 * Use this setting to specify the depth level target for a type that supports the {@linkcode $UseDepth} capability consumer.
 *
 * @template Depth - The depth level to use for the {@linkcode $UseDepth} capability.
 *
 * @see {@linkcode $AsDeep} for the deep behavior broker of this capability.
 * @see {@linkcode $AsShallow} for the shallow behavior broker of this capability.
 */
export type $Level<Depth extends $DepthLevel> = $UseDepth<Depth>;

/**
 * The shallow behavior broker of the {@linkcode $UseDepth} capability.
 *
 * Use this setting to specify the shallow (`false`) target for a type that supports the {@linkcode $UseDepth} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseDepth} capability when the setting is not explicitly set to
 * > `"collection"`, `"keys"`, or `"values"`.
 *
 * @see {@linkcode $AsDeep} for the deep behavior broker of this capability.
 * @see {@linkcode $Level} for the depth level behavior broker of this capability.
 */
export type $AsShallow = $UseDepth<false>;
