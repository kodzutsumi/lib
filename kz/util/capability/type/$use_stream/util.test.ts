import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $AsPredicate,
  $AsStream,
  $GetStream,
  $PickStream,
  $UseStream,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseStream - util', () => {
  describe('$GetStream', () => {
    it('should pick the $UseStream value from a settings object', () => {
      type Expected = true;
      type Settings = $AsStream & $AsCondition;
      type Actual = $GetStream<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseStream value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsCondition;
      type Actual = $GetStream<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseStream value', () => {
      type Expected = true;
      type Settings = $AsCondition;
      type Actual = $GetStream<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickStream', () => {
    it('should pick the $UseStream value from a settings object', () => {
      type Expected = $UseStream<false>;
      type Settings = $AsPredicate & $AsCondition;
      type Actual = $PickStream<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsPredicate if the settings object does not have a $UseStream value', () => {
      type Expected = $AsPredicate;
      type Settings = $AsCondition;
      type Actual = $PickStream<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
