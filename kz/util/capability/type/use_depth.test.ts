// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsDeep,
  AsShallow,
  AsStrict,
  DecrementDepth,
  DepthKey,
  DepthKeyString,
  DepthLevel,
  GetDepth,
  IsDeep,
  LevelOf,
  PickDepth,
  UseDepth,
} from '@kz/util/capability';

describe('UseDepth', () => {
  describe('DepthKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof DepthKeyString, '@@UseDepth'>>(true);
    });
  });

  describe('DepthKey', () => {
    it('should be the type of DepthKeyString', () => {
      assertType<IsExact<DepthKey, typeof DepthKeyString>>(true);
    });
  });

  describe('DepthLevel', () => {
    it('should be a union of the numbers 1 - 10', () => {
      type Actual = DepthLevel;
      type Expected = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('UseDepth', () => {
    it('should be an object type with the DepthKeyString property of boolean or DepthLevel', () => {
      type Actual = UseDepth;
      type Expected = {
        [DepthKeyString]: boolean | DepthLevel;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsDeep', () => {
    it('should be a UseDepth type with the DepthKeyString property set to true', () => {
      type Actual = AsDeep;
      type Expected = {
        [DepthKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsShallow', () => {
    it('should be a UseDepth type with the DepthKeyString property set to false', () => {
      type Actual = AsShallow;
      type Expected = {
        [DepthKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('LevelOf<1>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 1', () => {
      type Actual = LevelOf<1>;
      type AsUsed = UseDepth<1>;
      type Expected = {
        [DepthKeyString]: 1;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<2>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 2', () => {
      type Actual = LevelOf<2>;
      type AsUsed = UseDepth<2>;
      type Expected = {
        [DepthKeyString]: 2;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<3>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 3', () => {
      type Actual = LevelOf<3>;
      type AsUsed = UseDepth<3>;
      type Expected = {
        [DepthKeyString]: 3;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<4>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 4', () => {
      type Actual = LevelOf<4>;
      type AsUsed = UseDepth<4>;
      type Expected = {
        [DepthKeyString]: 4;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<5>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 5', () => {
      type Actual = LevelOf<5>;
      type AsUsed = UseDepth<5>;
      type Expected = {
        [DepthKeyString]: 5;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<6>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 6', () => {
      type Actual = LevelOf<6>;
      type AsUsed = UseDepth<6>;
      type Expected = {
        [DepthKeyString]: 6;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<7>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 7', () => {
      type Actual = LevelOf<7>;
      type AsUsed = UseDepth<7>;
      type Expected = {
        [DepthKeyString]: 7;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<8>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 8', () => {
      type Actual = LevelOf<8>;
      type AsUsed = UseDepth<8>;
      type Expected = {
        [DepthKeyString]: 8;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<9>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 9', () => {
      type Actual = LevelOf<9>;
      type AsUsed = UseDepth<9>;
      type Expected = {
        [DepthKeyString]: 9;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('LevelOf<10>', () => {
    it('should be a UseDepth type with the DepthKeyString property set to 10', () => {
      type Actual = LevelOf<10>;
      type AsUsed = UseDepth<10>;
      type Expected = {
        [DepthKeyString]: 10;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('DecrementDepth', () => {
    it('should decrement return AsShallow', () => {
      type CapabilitySet = AsShallow & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = AsShallow & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return AsShallow', () => {
      type CapabilitySet = LevelOf<1> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = AsShallow & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return AsShallow', () => {
      type CapabilitySet = LevelOf<2> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = AsShallow & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<2>', () => {
      type CapabilitySet = LevelOf<3> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<2> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<3>', () => {
      type CapabilitySet = LevelOf<4> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<3> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<4>', () => {
      type CapabilitySet = LevelOf<5> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<4> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<5>', () => {
      type CapabilitySet = LevelOf<6> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<5> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<6>', () => {
      type CapabilitySet = LevelOf<7> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<6> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<7>', () => {
      type CapabilitySet = LevelOf<8> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<7> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<8>', () => {
      type CapabilitySet = LevelOf<9> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<8> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<9>', () => {
      type CapabilitySet = LevelOf<10> & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<9> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should decrement return LevelOf<9>', () => {
      type CapabilitySet = AsDeep & AsStrict;
      type Actual = DecrementDepth<CapabilitySet>;
      type Expected = LevelOf<9> & AsStrict;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('IsDeep', () => {
    it('should return false for AsShallow', () => {
      type CapabilitySet = AsShallow & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<1>', () => {
      type CapabilitySet = LevelOf<1> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<2>', () => {
      type CapabilitySet = LevelOf<2> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<3>', () => {
      type CapabilitySet = LevelOf<3> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<4>', () => {
      type CapabilitySet = LevelOf<4> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<5>', () => {
      type CapabilitySet = LevelOf<5> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<6>', () => {
      type CapabilitySet = LevelOf<6> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<7>', () => {
      type CapabilitySet = LevelOf<7> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<8>', () => {
      type CapabilitySet = LevelOf<8> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<9>', () => {
      type CapabilitySet = LevelOf<9> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for LevelOf<10>', () => {
      type CapabilitySet = LevelOf<10> & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true for AsDeep', () => {
      type CapabilitySet = AsDeep & AsStrict;
      type Actual = IsDeep<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('PickDepth', () => {
    it('should return UseDepth', () => {
      type CapabilitySet = UseDepth & AsStrict;
      type Actual = PickDepth<CapabilitySet>;
      type Expected = UseDepth;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsDeep', () => {
      type CapabilitySet = AsDeep & AsStrict;
      type Actual = PickDepth<CapabilitySet>;
      type Expected = UseDepth<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsShallow', () => {
      type CapabilitySet = AsShallow & AsStrict;
      type Actual = PickDepth<CapabilitySet>;
      type Expected = UseDepth<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return LevelOf<4>', () => {
      type CapabilitySet = LevelOf<4> & AsStrict;
      type Actual = PickDepth<CapabilitySet>;
      type Expected = LevelOf<4>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickDepth<CapabilitySet, 5>;
      type Expected = UseDepth<5>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetDepth', () => {
    it('should return boolean | DepthLevel', () => {
      type CapabilitySet = UseDepth & AsStrict;
      type Actual = GetDepth<CapabilitySet>;
      type Expected = boolean | DepthLevel;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return true', () => {
      type CapabilitySet = AsDeep & AsStrict;
      type Actual = GetDepth<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsShallow & AsStrict;
      type Actual = GetDepth<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return 4', () => {
      type CapabilitySet = LevelOf<4> & AsStrict;
      type Actual = GetDepth<CapabilitySet>;
      type Expected = 4;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetDepth<CapabilitySet, 5>;
      type Expected = 5;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
