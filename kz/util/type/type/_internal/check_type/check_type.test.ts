import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsDistributed, $AsLoose, $AsUnsafe } from '@kz/util/capability';

import type { Any } from '../../any.ts';

import type { CheckType } from './check_type.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;

/**
 * Tests the safety result.
 */
//TODO(@ebntly): Add tests for $AsSafe and $AsUnsafe
describe('CheckType', () => {
  describe('$AsSafe (default)', () => {
    });

  describe('$AsUnsafe', () => {
  });
});
