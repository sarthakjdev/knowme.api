/* eslint-disable @typescript-eslint/no-var-requires */

const tsConfigPaths = require('tsconfig-paths')
const tsConfig = require('./tsconfig.base.json')

const baseUrl = './dist' // Either absolute or relative path. If relative it's resolved to current working directory.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cleanup = tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths,
})

// When path registration is no longer needed
// cleanup();
