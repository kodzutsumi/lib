import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { _ToBoolString } from './_to_bool_string.ts';

const IS_TRUE = true;

describe('_ToBoolString', () => {
  it('should return "true" for true', () => {
    type Expected = 'true';
    type Actual = _ToBoolString<true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "false" for false', () => {
    type Expected = 'false';
    type Actual = _ToBoolString<false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "boolean" for boolean', () => {
    type Expected = 'boolean';
    type Actual = _ToBoolString<boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});
