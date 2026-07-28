// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// // deno-lint-ignore-file no-boolean-literal-for-arguments

// <example>
// <title>Optional full condition</title>
// <description></description>
// <code type="ts">

// </code>
// <callout type="note">
// The type `MissingConditions` no longer produces an error due to the default settings provided.
//
// The type `MissingElse` will produce the following error:
// ```bash
// TS2344 [ERROR]: Type 'Then<number>' does not satisfy
// the constraint 'UseThen & UseElse'.
//   Property '[ElseKeyString]' is missing in type
//   'Then<number>' but required in type 'UseElse'
// ```
// </callout>
// </example>
