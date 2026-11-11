import { assertEquals } from '@std/assert';
import { ShouldBe, TestFixture, TestGroup, TestNames } from '@kz/testing/suite';
import { I11N_DOCS_HOST, I11N_EX2_PATH } from '@kz/internal/constants';

@TestFixture('internal constants')
class _ {
  @TestGroup('I11N_DOCS_HOST')
  @ShouldBe('https://docs.i11n.io')
  [TestNames.new](): void {
    const expected = 'https://docs.i11n.io';
    const actual = I11N_DOCS_HOST;

    assertEquals(actual, expected);
  }

  @TestGroup('I11N_EX2_PATH')
  @ShouldBe('ex2')
  [TestNames.new](): void {
    const expected = 'ex2';
    const actual = I11N_EX2_PATH;

    assertEquals(actual, expected);
  }
}