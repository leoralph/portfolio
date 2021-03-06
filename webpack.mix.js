const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    .sourceMaps()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [new LiveReloadPlugin()]
    })
    .disableNotifications()
