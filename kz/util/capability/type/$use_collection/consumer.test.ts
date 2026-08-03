import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $CollectionTarget,
  $UseCollection,
  $UseCollectionKeyString,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCollection - consumer', () => {
  describe('$UseCollection', () => {
    it('should be keyed by the $UseCollectionKeyString', () => {
      type Expected = typeof $UseCollectionKeyString;
      type Actual = keyof $UseCollection;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should have an unknown setting by default', () => {
      type Expected = {
        [$UseCollectionKeyString]: $CollectionTarget;
      };
      type Actual = $UseCollection;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be a constrained consumer', () => {
      // @ts-expect-error Will only accept a $CollectionTarget value.
      type _Error = $UseCollection<string>;
    });
  });
});
