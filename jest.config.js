module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/*.test.(ts|js)"],
  testPathIgnorePatterns: ["/dist/"],
  testEnvironment: "node",
  preset: "ts-jest",
  resetModules: true,
  resetMocks: true
}
