import type { Permit } from '@kz/util/lint';

type NullSetting = Permit<
  '{}',
  '@i11n/kz/permit#$UseNullSetting:Allow empty capability set ($AsNullSetting)'
>;

/**
 * Indicates that a type can accept an empty capability set.
 */
export type $UseNullSetting = NullSetting;
