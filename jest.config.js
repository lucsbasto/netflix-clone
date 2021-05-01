module.exports = {
  roots: ['<rootDir>/src/'],
  collectionCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirector: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
