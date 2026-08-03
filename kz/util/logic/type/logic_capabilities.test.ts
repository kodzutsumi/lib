import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $UseElse,
  $UseInverted,
  $UseNullSetting,
  $UseThen,
  $UseUnsafe,
  $UseVote,
} from '@kz/util/capability';
import type { LogicCapabilities } from '@kz/util/logic';

const IS_TRUE = true;

describe('LogicCapabilities', () => {
  it('should be a union of capabilities', () => {
    type Expected =
      | $UseElse
      | $UseInverted
      | $UseThen
      | $UseUnsafe
      | $UseVote
      | $UseNullSetting;
    type Result = IsExact<LogicCapabilities, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
