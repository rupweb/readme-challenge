import { execSync } from 'child_process';

describe('Markdown Lint', () => {
  test('should have no markdownlint errors', () => {
    try {
      console.log("Starting markdownlint test");
      execSync('npx markdownlint-cli "md/*.md"');
    } catch (error) {
      throw new Error(`markdownlint issues:\n${error.stdout.toString()}`);
    }

    // Token expectation
    expect(true).toBe(true);
  });
});
