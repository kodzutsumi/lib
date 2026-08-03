import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $Type, $UseType, $UseTypeKeyString } from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseType - consumer', () => {
  describe('$UseType', () => {
    it('should be keyed by the $UseTypeKeyString', () => {
      type Expected = typeof $UseTypeKeyString;
      type Actual = keyof $UseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseTypeKeyString]: unknown;
      };
      type Actual = $UseType;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a capability open consumer', () => {
      type Expected = $Type<string>;
      type Actual = $UseType<string>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
