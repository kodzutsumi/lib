import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsCondition } from '@kz/util/capability';
import type { LogicDefaults } from '@kz/util/logic';

const IS_TRUE = true;

describe('LogicDefaults', () => {
  it('should be $AsCondition', () => {
    type Expected = $AsCondition;
    type Result = IsExact<LogicDefaults, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
