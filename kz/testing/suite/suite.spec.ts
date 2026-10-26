import {
  AfterEach,
  type TestData,
  TestFixture,
  TestGroup,
} from '@kz/testing/suite';
import { assertEquals } from '@std/assert';
import { TestCase } from './decorators/test_case.ts';

let i = 0;

@TestFixture()
@AfterEach(() => {
  i++;
})
class _TestingSuite {
  @TestGroup('grumble')
  @TestCase(1, 2, 3)
  @TestCase(4, 5, 9)
  test_addition({ case: cs }: TestData<[number, number, number]>): void {
    const [a, b, c] = cs.arguments;

    assertEquals(a + b, c, `failed on ${a} + ${b} = ${c}`);
  }
}
