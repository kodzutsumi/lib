import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $Else, $UseElse, $UseElseKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseElse - consumer', () => {
  describe('$UseElse', () => {
    it('should be keyed by the $UseElseKeyString', () => {
      type Expected = typeof $UseElseKeyString;
      type Actual = keyof $UseElse;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseElseKeyString]: unknown;
      };
      type Actual = $UseElse;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $Else<string>;
      type Actual = $UseElse<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
