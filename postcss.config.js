const tailwindcss = require("tailwindcss");
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
        purgecss({content: ['./layouts/**/*.html', './src/**/*.js', './src/**/*.jsx'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
};