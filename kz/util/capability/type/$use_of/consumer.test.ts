import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $Of, $UseOf, $UseOfKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseOf - consumer', () => {
  describe('$UseOf', () => {
    it('should be keyed by the $UseOfKeyString', () => {
      type Expected = typeof $UseOfKeyString;
      type Actual = keyof $UseOf;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseOfKeyString]: unknown;
      };
      type Actual = $UseOf;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $Of<string>;
      type Actual = $UseOf<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
