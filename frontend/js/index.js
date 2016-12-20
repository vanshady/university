/**
 *  index.js, the starter.
 *
 *  @author  Minwei Xu
 *  @date    Dec 1, 2016
 *
 */
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], (require) => {
    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure([
    'less/main.less',
    'splash-screen',
    './fw/Entrance.jsx',
], (require) => {
    const Entrance = require('./fw/Entrance.jsx').default;
    require('less/main.less');

    (new Entrance()).run();
});
