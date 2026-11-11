// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsExclude, AsUnified } from '@kz/util/capability';

import type { RetrieveValue } from './retrieve_value.ts';

type OfObject = {
  a: string;
  b: number;
  c: boolean;
};

type OfSubObjectUnion = OfObject | {
  d: Date;
  e: symbol;
};

type OfSubObjectIntersect = OfObject & {
  d: Date;
  e: symbol;
};

describe('RetrieveValue', () => {
  describe('AsUnified (default)', () => {
    describe('AsInclude (default)', () => {
      it('should retrieve the TargetType from Type', () => {
        type Actual = RetrieveValue<OfObject, OfSubObjectUnion>;
        type Expected = OfObject;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it("doesn't work on intersections", () => {
        type Actual = RetrieveValue<OfObject, OfSubObjectIntersect>;
        type Expected = OfSubObjectIntersect;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns never for intersections', () => {
        type Actual = RetrieveValue<OfSubObjectIntersect, OfObject>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsExclude', () => {
      it('should retrieve the TargetType from Type', () => {
        type Actual = RetrieveValue<OfObject, OfSubObjectUnion, AsExclude>;
        type Expected = Exclude<OfSubObjectUnion, OfObject>;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns never for intersections', () => {
        type Actual = RetrieveValue<OfObject, OfSubObjectIntersect, AsExclude>;
        type Expected = never;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns OfType for intersections', () => {
        type Actual = RetrieveValue<OfSubObjectIntersect, OfObject, AsExclude>;
        type Expected = OfObject;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });
  describe('AsUnified', () => {
    describe('AsInclude (default)', () => {
      it('should retrieve the TargetType from Type', () => {
        type Actual = RetrieveValue<OfObject, OfSubObjectUnion, AsUnified>;
        type Expected = OfObject;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it("doesn't work on intersections", () => {
        type Actual = RetrieveValue<
          OfObject,
          OfSubObjectIntersect,
          AsUnified
        >;
        type Expected = OfSubObjectIntersect;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns OfType for intersections', () => {
        type Actual = RetrieveValue<
          OfSubObjectIntersect,
          OfObject,
          AsUnified & AsExclude
        >;
        type Expected = OfObject;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsExclude', () => {
      it('should retrieve the TargetType from Type', () => {
        type Actual = RetrieveValue<
          OfObject,
          OfSubObjectUnion,
          AsUnified & AsExclude
        >;
        type Expected = Exclude<OfSubObjectUnion, OfObject>;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns object for intersections', () => {
        type Actual = RetrieveValue<
          OfObject,
          OfSubObjectIntersect,
          AsUnified & AsExclude
        >;
        type Expected = OfSubObjectIntersect;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('returns OfType for intersections', () => {
        type Actual = RetrieveValue<
          OfSubObjectIntersect,
          OfObject,
          AsUnified & AsExclude
        >;
        type Expected = OfObject;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });
});
