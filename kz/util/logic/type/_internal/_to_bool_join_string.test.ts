import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { _ToBoolJoinString } from './_to_bool_join_string.ts';

const IS_TRUE = true;

describe('_ToBoolJoinString', () => {
  it('should return "true/true" for true/true', () => {
    type Expected = 'true/true';
    type Actual = _ToBoolJoinString<true, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "true/false" for true/false', () => {
    type Expected = 'true/false';
    type Actual = _ToBoolJoinString<true, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "true/boolean" for true/boolean', () => {
    type Expected = 'true/boolean';
    type Actual = _ToBoolJoinString<true, boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "false/false" for false/false', () => {
    type Expected = 'false/false';
    type Actual = _ToBoolJoinString<false, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "false/true" for false/true', () => {
    type Expected = 'false/true';
    type Actual = _ToBoolJoinString<false, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "false/boolean" for false/boolean', () => {
    type Expected = 'false/boolean';
    type Actual = _ToBoolJoinString<false, boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "boolean/boolean" for boolean/boolean', () => {
    type Expected = 'boolean/boolean';
    type Actual = _ToBoolJoinString<boolean, boolean>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "boolean/true" for boolean/true', () => {
    type Expected = 'boolean/true';
    type Actual = _ToBoolJoinString<boolean, true>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });

  it('should return "boolean/false" for boolean/false', () => {
    type Expected = 'boolean/false';
    type Actual = _ToBoolJoinString<boolean, false>;
    type Result = IsExact<Expected, Actual>;

    assertType<Result>(IS_TRUE);
  });
});
