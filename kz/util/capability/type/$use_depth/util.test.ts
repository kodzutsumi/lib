import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  $AsDeep,
  $AsShallow,
  $AsUnsafe,
  $DecrementDepth,
  $GetDepth,
  $IsDeep,
  $Level,
  $PickDepth,
  $UseDepth,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseDepth - util', () => {
  describe('$GetDepth', () => {
    it('should pick the $UseDepth value from a settings object', () => {
      type Expected = false;
      type Settings = $AsShallow & $AsUnsafe;
      type Actual = $GetDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to false if the settings object does not have a $UseDepth value and if no default is provided', () => {
      type Expected = false;
      type Settings = $AsUnsafe;
      type Actual = $GetDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to a provided value if the settings object does not have a $UseDepth value', () => {
      type Expected = true;
      type Settings = $AsUnsafe;
      type Actual = $GetDepth<Settings, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$PickDepth', () => {
    it('should pick the $UseDepth value from a settings object', () => {
      type Expected = $UseDepth<false>;
      type Settings = $AsShallow & $AsUnsafe;
      type Actual = $PickDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should default to $AsShallow if the settings object does not have a $UseDepth value', () => {
      type Expected = $AsShallow;
      type Settings = $AsUnsafe;
      type Actual = $PickDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$DecrementDepth', () => {
    it('should decrement $AsDeep to $Level<9>', () => {
      type Expected = $UseDepth<9> & $AsUnsafe;
      type Settings = $AsDeep & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<9> to $Level<8>', () => {
      type Expected = $UseDepth<8> & $AsUnsafe;
      type Settings = $Level<9> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<8> to $Level<7>', () => {
      type Expected = $UseDepth<7> & $AsUnsafe;
      type Settings = $Level<8> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<7> to $Level<6>', () => {
      type Expected = $UseDepth<6> & $AsUnsafe;
      type Settings = $Level<7> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<6> to $Level<5>', () => {
      type Expected = $UseDepth<5> & $AsUnsafe;
      type Settings = $Level<6> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<5> to $Level<4>', () => {
      type Expected = $UseDepth<4> & $AsUnsafe;
      type Settings = $Level<5> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<4> to $Level<3>', () => {
      type Expected = $UseDepth<3> & $AsUnsafe;
      type Settings = $Level<4> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<3> to $Level<2>', () => {
      type Expected = $UseDepth<2> & $AsUnsafe;
      type Settings = $Level<3> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<2> to $Level<1>', () => {
      type Expected = $Level<1> & $AsUnsafe;
      type Settings = $Level<2> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should decrement $Level<1> to $AsShallow', () => {
      type Expected = $AsShallow & $AsUnsafe;
      type Settings = $Level<1> & $AsUnsafe;
      type Actual = $DecrementDepth<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$IsDeep', () => {
    it('should return true for $AsDeep', () => {
      type Expected = true;
      type Settings = $AsDeep;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<9>', () => {
      type Expected = true;
      type Settings = $Level<9>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<8>', () => {
      type Expected = true;
      type Settings = $Level<8>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<7>', () => {
      type Expected = true;
      type Settings = $Level<7>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<6>', () => {
      type Expected = true;
      type Settings = $Level<6>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<5>', () => {
      type Expected = true;
      type Settings = $Level<5>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<4>', () => {
      type Expected = true;
      type Settings = $Level<4>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<3>', () => {
      type Expected = true;
      type Settings = $Level<3>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<2> ', () => {
      type Expected = true;
      type Settings = $Level<2>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return true for $Level<1> ', () => {
      type Expected = true;
      type Settings = $Level<1>;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });

    it('should return false for $AsShallow ', () => {
      type Expected = false;
      type Settings = $AsShallow;
      type Actual = $IsDeep<Settings>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
