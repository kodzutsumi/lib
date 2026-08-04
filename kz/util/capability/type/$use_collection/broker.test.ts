import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsEntries,
  $AsKeys,
  $AsValues,
  $UseCollection,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCollection - broker', () => {
  describe('$AsEntries (implied default)', () => {
    it('should be the entries (default) variant', () => {
      type Expected = $UseCollection<'entries'>;
      type Actual = $AsEntries;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCollection', () => {
      type Expected = $UseCollection;
      type Actual = $AsEntries;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsKeys', () => {
    it('should be the keys variant', () => {
      type Expected = $UseCollection<'keys'>;
      type Actual = $AsKeys;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCollection', () => {
      type Expected = $UseCollection;
      type Actual = $AsKeys;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsValues', () => {
    it('should be the values variant', () => {
      type Expected = $UseCollection<'values'>;
      type Actual = $AsValues;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCollection', () => {
      type Expected = $UseCollection;
      type Actual = $AsValues;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
