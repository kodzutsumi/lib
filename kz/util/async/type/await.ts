// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsBuiltin,
  AsCustom,
  AsOptional,
  AsRequired,
  UseBuiltin,
  UseCondition,
  UseElse,
  UseOptional,
  UseThen,
} from '@kz/util/capability';

type AwaitOptions = UseCondition | UseOptional | UseBuiltin;
type AwaitDefaults =
  & AsOptional
  & AsCustom;

export type Await<
  Type,
  Options extends AwaitOptions = AwaitDefaults,
> = Options extends AsBuiltin ? Awaited<Type>
  : Type extends PromiseLike<infer InnerType>
    ? HandlePromise<InnerType, Options>
  : HandleValue<Type, Options>;

type HandlePromise<
  Type,
  Options extends AwaitOptions = AwaitDefaults,
> = Options extends UseThen<infer ThenType> ? ThenType
  : Type;

type HandleValue<
  Type,
  Options extends AwaitOptions = AwaitDefaults,
> = Options extends AsRequired
  ? Options extends UseElse<infer ElseType> ? ElseType
  : Type
  : Options extends UseElse<infer ElseType> ? ElseType
  : never;
