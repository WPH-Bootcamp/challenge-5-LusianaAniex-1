module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/test/**/*.ts'
  ],
  
  // Transform TypeScript files
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  
  // Extensions yang diakui
  moduleFileExtensions: ['ts', 'js', 'json'],
  
  // Root directory
  roots: ['<rootDir>/src'],
  
  // Clear mocks setiap test
  clearMocks: true,
  
  // Path untuk module resolution
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
