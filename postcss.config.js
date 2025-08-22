const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

module.exports = {
    plugins: [
        postcssPresetEnv({
            env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
            debug: process.env.NODE_ENV === 'development',
            autoprefixer: { flexbox: 'no-2009' },
            enableClientSidePolyfills: true,
            features: {
                'nesting-rules': true,
                'font-variant-property': true,
                'overflow-property': true,
                'overflow-wrap-property': true,
                'system-ui-font-family': true,
                'prefers-color-scheme-query': true,
                'text-decoration-shorthand': true,
                'blank-pseudo-class': false,
                'focus-visible-pseudo-class': false,
                'focus-within-pseudo-class': false,
                'has-pseudo-class': false
            }
        }),
        ...process.env.NODE_ENV === 'production'
            ? [cssNano({preset: [
                "default",
                {
                    "discardComments": { "removeAll": true },
                    // Fix issue with @media (prefers-contrast: ...)...
                    // https://github.com/cssnano/cssnano/pull/921#issuecomment-3214722069
                    "normalizeWhitespace": false,
                    "minifyParams": false
                }]})
              ]
            : []
    ]
}
