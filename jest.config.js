const esModules = ['quasar', 'quasar/lang', 'lodash-es'].join('|');

/* eslint-env node */
module.exports = {
    globals: {
        __DEV__: true,
        // Remove if using `const enums`
        // See https://huafu.github.io/ts-jest/user/config/isolatedModules#example
        'ts-jest': {
            isolatedModules: true,
        },
    },
    // noStackTrace: true,
    // bail: true,
    // cache: false,
    verbose: true,
    // watch: true,
    collectCoverage: false,
    coverageDirectory: '<rootDir>/test/jest/coverage',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.vue',
        '<rootDir>/src/**/*.js',
        '<rootDir>/src/**/*.ts',
        '<rootDir>/src/**/*.jsx',
        '<rootDir>/src/**/*.tsx',
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '.d.ts$'],
    //TODO increase thresholds as coverage increases as testing will be enforced
    coverageThreshold: {
        global: {
            statements: 36.55,
            branches: 36.65,
            functions: 15.74,
            lines: 25,
        },
        './src/components/': {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
        './src/pages/': {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
        './src/layouts/': {
            statements: 0,
            branches: 100,
            functions: 0,
            lines: 0,
        },
    },
    testMatch: [
    // Matches tests in any subfolder of 'src' or into 'test/jest/__tests__'
    // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
        '<rootDir>/test/jest/__tests__/**/*.(spec|test).+(ts|js)?(x)',
        '<rootDir>/src/**/*.jest.(spec|test).+(ts|js)?(x)',
    ],
    // Extension-less imports of components are resolved to .ts files by TS,
    //  grating correct type-checking in test files.
    // Being 'vue' the first moduleFileExtension option, the very same imports
    //  will be resolved to .vue files by Jest, if both .vue and .ts files are
    //  in the same folder.
    // This guarantee a great dev experience both for testing and type-checking.
    // See https://github.com/vuejs/vue-jest/issues/188#issuecomment-620750728
    moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'ts', 'tsx'],
    moduleNameMapper: {
        '^quasar$': 'quasar/dist/quasar.esm.prod.js',
        '^~/(.*)$': '<rootDir>/$1',
        '^src/(.*)$': '<rootDir>/src/$1',
        '^app/(.*)$': '<rootDir>/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^boot/(.*)$': '<rootDir>/src/boot/$1',
        '.*css$': '@quasar/quasar-app-extension-testing-unit-jest/stub.css',
    },
    transform: {
    // See https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string
        [`^(${esModules}).+\\.js$`]: 'babel-jest',
        '^.+\\.(ts|js|html)$': 'ts-jest',
        // vue-jest uses find-babel-file, which searches by this order:
        //  (async) .babelrc, .babelrc.js, package.json, babel.config.js
        //  (sync) .babelrc, .babelrc.js, babel.config.js, package.json
        // https://github.com/tleunen/find-babel-config/issues/33
        '.*\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    },
    transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
    setupFiles: ['<rootDir>/jest.init.js', '<rootDir>/test/jest/setEnvVars.ts'],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
};
