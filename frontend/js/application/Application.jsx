'use strict';

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Panel from './components/Panel.jsx';
import SearchCard from './components/searchcard/SearchCard.jsx';

class Application extends React.Component {

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(lightTheme)};
    }

    render() {
        return (
            <div>
              <Header/>
              <Panel>
                <SearchCard />
                {/* <SearchCard /> */}
                <div />
              </Panel>
              {/* <Footer/> */}
            </div>
            );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Application;
