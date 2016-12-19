import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Header from './components/Header';
// import Footer from './components/Footer';
import Panel from './components/Panel';
import SearchCard from './components/searchcard/SearchCard';
import SATCard from './components/satcard/SATCard';

class Application extends React.Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(lightTheme) };
    }

    render() {
        return (
          <div>
            <Header />
            <Panel>
              <SearchCard url="https://university-backend.herokuapp.com" />
              <SATCard url="https://university-backend.herokuapp.com" />
            </Panel>
            {/* <Footer /> */}
          </div>);
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Application;
