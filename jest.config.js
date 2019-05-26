module.exports = {
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]
};