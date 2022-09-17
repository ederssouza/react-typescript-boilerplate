module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/public/'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/index.ts',
    '!src/main.tsx',
    '!src/vite-env.d.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
}
