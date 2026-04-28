// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export type IsAny<Type> = 0 extends 1 & NoInfer<Type> ? true : false;
