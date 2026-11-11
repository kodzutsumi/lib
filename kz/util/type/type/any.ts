// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Permit } from '@kz/util/lint';

/**
 * A helper for using the `any` type with a documented reason. This is intended to be used in cases where the use of `any` is necessary, but should be explicitly acknowledged and justified.
 *
 * @template Reason - A string literal type that describes the reason for using `any`. This should be a concise explanation of why `any` is necessary in this case.
 * @returns The `any` type if a valid reason is provided, otherwise `never`. This ensures that the use of `any` is intentional and justified, and helps to prevent accidental or unjustified use of `any` in the codebase.
 */
export type Any<Reason extends string> = Permit<'any', Reason>;
