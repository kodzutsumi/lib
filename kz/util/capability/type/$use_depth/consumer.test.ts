import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $DepthValue,
  $UseDepth,
  $UseDepthKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDepth - consumer', () => {
  describe('$UseDepth', () => {
    it('should be keyed by the $UseDepthKeyString', () => {
      type Expected = typeof $UseDepthKeyString;
      type Actual = keyof $UseDepth;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseDepthKeyString]: $DepthValue;
      };
      type Actual = $UseDepth;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a constrained consumer', () => {
      // @ts-expect-error Will only accept a $DepthValue value.
      type _Error = $UseDepth<string>;
    });
  });
});
