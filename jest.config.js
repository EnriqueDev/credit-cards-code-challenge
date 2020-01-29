module.exports = {
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],

  testEnvironment: 'jsdom',
}
