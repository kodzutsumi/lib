// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Scalar } from '@kz/util/type';
import type {
  AsDistributed,
  AsExclude,
  AsLoose,
  AsNullOption,
} from '@kz/util/capability';

import type { TypeException } from '../../type_exception.ts';

import type { RetrieveCollection } from './retrieve_collection.ts';
import type { StandardCapabilities } from './types.ts';

type OfType = {
  a: string;
  b: number;
  c: boolean;
  d: Date;
  e: symbol;
  f: Scalar;
};

/**
 * Test that the `RetrieveCollection` type correctly retrieves the appropriate collection of properties or keys based on the specified type and settings. The tests cover both the 'collection' and 'idents' retrieval modes, as well as the effects of the `AsLoose`, `AsDistributed`, and `AsExclude` capabilities on the resulting types.
 *
 * This tests the matrix of `UseCollection`, `UseExclusion`, `UseDistributed`, and `UseStrict` capabilities.
 *
 * - Strict unified inclusion of a collection - `Collection & AsStrict & AsUnified & AsInclude` (default)
 * - Strict distributed inclusion of a collection - `Collection & AsStrict & AsDistributed & AsInclude`
 * - Loose unified inclusion of a collection - `Collection & AsLoose & AsUnified & AsInclude`
 * - Loose distributed inclusion of a collection - `Collection & AsLoose & AsDistributed & AsInclude`
 * - Strict unified exclusion of a collection - `Collection & AsStrict & AsUnified & AsExclude`
 * - Strict distributed exclusion of a collection - `Collection & AsStrict & AsDistributed & AsExclude`
 * - Loose unified exclusion of a collection - `Collection & AsLoose & AsUnified & AsExclude`
 * - Loose distributed exclusion of a collection - `Collection & AsLoose & AsDistributed & AsExclude`
 * - Strict unified inclusion of collection identities - `CollectionIdents & AsStrict & AsUnified & AsInclude` (default)
 * - Strict distributed inclusion of collection identities - `CollectionIdents & AsStrict & AsDistributed & AsInclude`
 * - Loose unified inclusion of collection identities - `CollectionIdents & AsLoose & AsUnified & AsInclude`
 * - Loose distributed inclusion of collection identities - `CollectionIdents & AsLoose & AsDistributed & AsInclude`
 * - Strict unified exclusion of collection identities - `CollectionIdents & AsStrict & AsUnified & AsExclude`
 * - Strict distributed exclusion of collection identities - `CollectionIdents & AsStrict & AsDistributed & AsExclude`
 * - Loose unified exclusion of collection identities - `CollectionIdents & AsLoose & AsUnified & AsExclude`
 * - Loose distributed exclusion of collection identities - `CollectionIdents & AsLoose & AsDistributed & AsExclude`
 * - Strict unified inclusion of collection values - `CollectionValues & AsStrict & AsUnified & AsInclude` (default)
 * - Strict distributed inclusion of collection values - `CollectionValues & AsStrict & AsDistributed & AsInclude`
 * - Loose unified inclusion of collection values - `CollectionValues & AsLoose & AsUnified & AsInclude`
 * - Loose distributed inclusion of collection values - `CollectionValues & AsLoose & AsDistributed & AsInclude`
 * - Strict unified exclusion of collection values - `CollectionValues & AsStrict & AsUnified & AsExclude`
 * - Strict distributed exclusion of collection values - `CollectionValues & AsStrict & AsDistributed & AsExclude`
 * - Loose unified exclusion of collection values - `CollectionValues & AsLoose & AsUnified & AsExclude`
 * - Loose distributed exclusion of collection values - `CollectionValues & AsLoose & AsDistributed & AsExclude`
 */
describe('RetrieveCollection', () => {
  describe('Record', () => {
    describe('Collection', () => {
      describe('AsInclude (default)', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'collection'>;
              type Expected = Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'collection'>;
              type Expected = Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'collection'>;
              type Expected = Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'collection'>;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'collection'>;
              type Expected = Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection'
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'collection'>;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = AsNullOption;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsDistributed
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = AsNullOption;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsLoose & AsDistributed
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });

      describe('AsExclude', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'collection'>;
              type Expected = Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'collection'>;
              type Expected = Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'collection'>;
              type Expected = Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'collection'>;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'collection'>;
              type Expected = Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection'
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'collection'>;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
            Date.now;
            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = AsNullOption;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsLoose
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsDistributed & AsExclude
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return a partial object for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return a partial object for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'collection',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });
    });

    describe('CollectionIdents', () => {
      describe('AsInclude (default)', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents'
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'idents'>;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsDistributed
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsLoose & AsDistributed
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });

      describe('AsExclude', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'idents'>;
              type Expected = keyof Pick<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents'
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'idents'>;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'a' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'b' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'c' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'e' | 'f'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
            Date.now;
            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsLoose
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsDistributed & AsExclude
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'a'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'b'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'c'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'e'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return object keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Omit<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'idents',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = keyof Pick<OfType, 'd'>;

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });
    });

    describe('CollectionValues', () => {
      describe('AsInclude (default)', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'a'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'b'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'c'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'e'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values'
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'values'>;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'a' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'b' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'c' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'e' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsLoose
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'a'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'b'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'c'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'e'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsDistributed
              >;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'a' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'b' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'c' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'e' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsLoose & AsDistributed
              >;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });

      describe('AsExclude', () => {
        describe('AsUnified (default)', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<string, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'a'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<number, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'b'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<boolean, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'c'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<Date, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<symbol, OfType, 'values'>;
              type Expected = OfType[keyof Pick<OfType, 'e'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return an empty object for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values'
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<Scalar, OfType, 'values'>;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'a' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'b' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'c' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'e' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
            Date.now;
            it('should return never for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsLoose
              >;
              type Expected = never;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsLoose
              >;
              type Expected = OfType[keyof Pick<OfType, 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });

        describe('AsDistributed', () => {
          describe('AsStrict (default)', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'a'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'b'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'c'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'e'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });

          describe('AsLoose', () => {
            it('should return partial keys for string', () => {
              type Actual = RetrieveCollection<
                string,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for number', () => {
              type Actual = RetrieveCollection<
                number,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for boolean', () => {
              type Actual = RetrieveCollection<
                boolean,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for symbol', () => {
              type Actual = RetrieveCollection<
                symbol,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd' | 'f'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Date', () => {
              type Actual = RetrieveCollection<
                Date,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Omit<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return object keys for part of Date', () => {
              type Actual = RetrieveCollection<
                { getDate(): number },
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = Exclude<OfType[keyof OfType], Date>;

              assertType<IsExact<Actual, Expected>>(true);
            });

            it('should return partial keys for Scalar', () => {
              type Actual = RetrieveCollection<
                Scalar,
                OfType,
                'values',
                AsLoose & AsDistributed & AsExclude
              >;
              type Expected = OfType[keyof Pick<OfType, 'd'>];

              assertType<IsExact<Actual, Expected>>(true);
            });
          });
        });
      });
    });
  });

  describe('Array', () => {
    it('should return a TypeException', () => {
      type Actual = RetrieveCollection<string, string[], 'idents'>;
      type Expected = TypeException<
        StandardCapabilities,
        '0x2'
      >;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Tuple', () => {
    it('should return a TypeException', () => {
      type Actual = RetrieveCollection<string, [string, number], 'idents'>;
      type Expected = TypeException<
        StandardCapabilities,
        '0x2'
      >;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Primitive', () => {
    it('should return a TypeException', () => {
      type Actual = RetrieveCollection<string, string, 'idents'>;
      type Expected = TypeException<
        StandardCapabilities,
        '0x3'
      >;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
