export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/src/__tests__/**/*.test.(ts|tsx)'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/playwright/',
    '/e2e/',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',

    // CSS / Tailwind mock
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    // Assets mock
    '\\.(jpg|jpeg|png|svg|webp)$': '<rootDir>/__mocks__/fileMock.js',
  },

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },

  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
}