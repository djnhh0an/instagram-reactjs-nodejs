export default {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        '/client/src/public/*.*',
        '/client/src/hooks/*.*',
        '/common/*.*'
    ],
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    fakeTimers: {
        "enableGlobally": false
    },
    moduleDirectories: [
        "node_modules"
    ],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    testMatch: [
        "**/__tests__/**/*.js?(x)",
        "**/?(*.)+(spec|test).js?(x)"
    ],
    transform: {
        '^.+\\.[tj]s$': ['babel-jest', { configFile: './babel-jest.config.json' }],
    }
};
