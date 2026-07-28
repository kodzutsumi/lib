// deno-lint-ignore-file no-boolean-literal-for-arguments
import { assertType } from '@std/testing/types';
import type { Any, IsType } from '@kz/util/type';
import type { Of } from '@kz/util/capability';

type AnyType = Any<'i11n#testing'>;
type Result = IsType<string, Of<AnyType>>;

assertType<Result>(true);