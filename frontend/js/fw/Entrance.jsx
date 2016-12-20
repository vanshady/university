/**
 *  Entrance.js launch the application.
 *
 *  @author  Minwei Xu
 *  @date    Dec 1, 2016
 *
 */
import { Splash } from 'splash-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'js/application/Application';

class Entrance {
    destroySplash() {
        const self = this;
        Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(() => {
            if (Splash.isRunning()) {
                self.destroySplash();
            }
        }, 100);
    }

    run() {
        function beforeStart() {
            const injectTapEventPlugin = require('react-tap-event-plugin');
            // Needed for onTouchTap
            // Can go away when react 1.0 release
            // Check this repo:
            // https://github.com/zilverline/react-tap-event-plugin
            injectTapEventPlugin();
        }

        function launch() {
            ReactDOM.render(<Application />, document.querySelector('#view'));
        }

        beforeStart();
        this.destroySplash();
        launch();
    }

}

export default Entrance;
