// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import { describe, it } from '@std/testing/bdd';
// import { assert, assertEquals } from '@std/assert';

// import { Exception } from '../mod.ts';
// import { hashException } from './hash_exception.ts';

// describe('hashException', () => {
//   describe('hashException(exc)', () => {
//     it('should return a hash of the exception data', () => {
//       const exc = new Exception('An error occurred.');
//       const hash = hashException(exc);
//       assert(typeof hash === 'number');
//     });

//     it('should return a different hash for different exception data', () => {
//       const exc1 = new Exception('An error occurred.');
//       const exc2 = new Exception('Another error occurred.');
//       const hash1 = hashException(exc1);
//       const hash2 = hashException(exc2);
//       assert(hash1 !== hash2);
//     });

//     it('should return a different hash on same exception data at different time.', () => {
//       const exc1 = new Exception('An error occurred.');
//       const hash1 = hashException(exc1);
//       const hash2 = hashException(exc1);
//       assert(hash1 !== hash2);
//     });

//     it('should give an expected value based on known-randomness', () => {
//       const exc = new Exception('An error occurred.');
//       const date = 1704132000000;
//       const random = 998;
//       const id = date * random;
//       const hash = hashException(exc, id);

//       assertEquals(hash, -28704349);
//     });
//   });
// });
