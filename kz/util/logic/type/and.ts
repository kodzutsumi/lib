import type { AndResult, GetLogicResult } from './_internal/mod.ts';

import type { LogicCapabilities } from './logic_capabilities.ts';
import type { LogicDefaults } from './logic_defaults.ts';

/**
 * Computes the result of a logical AND operation based on the provided operands and settings.
 *
 * @example Melding Business objects with a model
 * ```ts
 * import { assertType, type IsExact } from '@std/testing/types';
 * import type { And } from '@kz/util/logic';
 * import type { $ConditionOf } from '@kz/util/capability';
 *
 * type Model = {
 *   id?: string;
 *   [key: string]: unknown;
 * };
 *
 * type Metadata = {
 *   createdAt: Date;
 *   updatedAt: Date;
 *   deletedAt?: Date;
 * };
 *
 * type BusObj = {
 *   id: string;
 *   createdAt: Date;
 *   updatedAt: Date;
 * };
 *
 * type AsBusinessObject<Type> = And<
 *   Type extends Model ? true : false,
 *   Type extends Metadata ? true : false,
 *   $ConditionOf<Type, never>
 * >;
 *
 * type Result = AsBusinessObject<BusObj>;
 *
 * assertType<IsExact<Result, BusObj>>(true);
 * ```
 *
 * @template OperandA - The first boolean operand.
 * @template OperandB - The second boolean operand.
 * @template Settings - The logic capabilities settings.
 * @returns The result of the logical AND operation based on the values of `OperandA` and `OperandB`.
 */
export type And<
  OperandA extends boolean,
  OperandB extends boolean,
  Settings extends LogicCapabilities = LogicDefaults,
> = GetLogicResult<AndResult<OperandA, OperandB>, Settings>;
