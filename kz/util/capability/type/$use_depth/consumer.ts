import type { $UseDepthKeyString } from './constant.ts';

export type $DepthLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type $DepthValue = boolean | $DepthLevel;

/**
 * Indicates support for specifying the depth of a type implementation.
 *
 * Use this capability consumer to indicate that a type supports specifying the depth of a type implementation, or results in a type with such capabilities, based on the value of the capability setting.
 *
 * @template Depth - The type setting for this capability consumer.
 */
export type $UseDepth<Depth extends $DepthValue = $DepthValue> = {
  /**
   * The capability setting key for the {@linkcode $UseDepth} capability.
   */
  [$UseDepthKeyString]: Depth;
};
