const cssImmutable = require('immutable-css')
const cssImport = require('postcss-import')
const cssNano = require('cssnano')
const cssNext = require('postcss-cssnext')
const laggard = require('laggard')
const path = require('path')
const postcss = require('postcss')
const postcssReporter = require('postcss-reporter')
const tailwindCss = require('tailwindcss')

const tailwindConfigPath = path.resolve(__dirname, "tailwind.js")

module.exports = (config) => {
    let plugins = []
    const env = config.get('env')

    plugins = plugins.concat([
        cssImport,
        tailwindCss(tailwindConfigPath),
        cssNext({warnForDuplicates: false}),
        laggard,
        cssImmutable,
        postcssReporter({ clearMessages: true, throwError: false }),
    ])
    
    if (env === "production") {
        plugins.concat([
            cssNano({ autoprefixer: false })
        ])
    }

    return {
        configurePostcss: {
            plugins: plugins
        }
    }
}
