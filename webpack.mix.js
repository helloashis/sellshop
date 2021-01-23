const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');


/*

mix.styles([
    'resources/sass/site/assets/css/bootstrap.min.css',
    'resources/sass/site/assets/css/animate.css',
    'resources/sass/site/assets/css/materialdesignicons.min.css',
    'resources/sass/site/assets/css/jquery.simpleLens.css',
    'resources/sass/site/assets/css/jquery-ui.min.css',
    'resources/sass/site/assets/css/nivo-slider.css',
    'resources/sass/site/assets/css/owl.carousel.css',
    'resources/sass/site/assets/css/responsive.css',
    'resources/sass/site/assets/css/meanmenu.min.css',
    'resources/sass/site/assets/style.css'

], 'public/css/all.css');


mix.scripts([

    'resources/sass/site/assets/js/vendor/jquery-1.12.3.min.js',
    'resources/sass/site/assets/js/jquery.nivo.slider.pack.js',
    'resources/sass/site/assets/js/bootstrap.min.js',
    'resources/sass/site/assets/js/owl.carousel.min.js',
    'resources/sass/site/assets/js/jquery.meanmenu.js',
    'resources/sass/site/assets/js/countdown.js',
    'resources/sass/site/assets/js/jquery.simpleLens.min.js',
    'resources/sass/site/assets/js/vendor/modernizr-2.8.3.min.js',
    'resources/sass/site/assets/js/jquery-ui.min.js',
    'resources/sass/site/assets/js/load-more.js',
    'resources/sass/site/assets/js/plugins.js',
    'resources/sass/site/assets/js/main.js',

], 'public/js/all.js');

*/
mix.js('resources/js/public.js', 'public/js/public.js')

mix.copyDirectory('resources/sass/site/assets/img', 'public/assets/img');
