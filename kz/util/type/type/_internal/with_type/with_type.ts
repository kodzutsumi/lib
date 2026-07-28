import type { Of } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { HandleWithType } from './handle_with_type.ts';

export type WithType<
  TargetType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends Of<infer OfType>
  ? HandleWithType<TargetType, OfType, Settings>
  : TargetType;
