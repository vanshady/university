import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Header from './components/Header';
// import Footer from './components/Footer';
import Panel from './components/Panel';
import SearchCard from './components/searchcard/SearchCard';

class Application extends React.Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(lightTheme) };
    }

    render() {
        return (
          <div>
            <Header />
            <Panel>
              <SearchCard />
              <div />
            </Panel>
            {/* <Footer/> */}
          </div>);
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Application;
