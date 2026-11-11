// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { Exception } from '../exception.ts';

// export function hashException(
//   exception: Exception,
//   seed = (Date.now() * Math.floor(Math.random() * 1000)),
// ): number {
//   const {
//     name,
//     code,
//     message,
//     data,
//     cause,
//   } = exception;
//   const hashableData = { seed, name, code, message, cause, data };
//   const encodableString = JSON.stringify(hashableData);
//   const chars = encodableString.split('');

//   const hash = chars.reduce((acc, char) => {
//     acc = ((acc << 5) - acc) + char.charCodeAt(0);
//     acc = acc & acc;
//     return acc;
//   }, 0);

//   return hash;
// }
