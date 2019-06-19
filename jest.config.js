module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest",
  resetMocks: true,
  resetModules: true,
  testEnvironment: "node",
  testMatch: ["**/*.test.(ts|js)"],
  testPathIgnorePatterns: ["/dist/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}
