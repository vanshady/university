import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import Panel from './components/Panel';
import MyCard from './components/MyCard';
import SearchCard from './components/searchcard/SearchCard';
import SATCard from './components/satcard/SATCard';

const request = require('superagent');

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        const url = 'https://university-backend.herokuapp.com';
        const self = this;
        request
            .get(url + '/public_tuition_difference')
            .end((err, res) => {
                if (res) {
                    const difference = parseFloat(JSON.parse(res.text)[0].difference);
                    self.setState({ difference: Math.round(difference * 100) / 100 });
                }
            });
    }

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
              <MyCard
                loading={!this.state.difference}
                title="Public University Tuition Difference"
              >
                <p>{ `The average difference between out-state and in-state tuition of public universities is $${this.state.difference}.` }</p>
              </MyCard>
            </Panel>
            <Footer />
          </div>);
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Application;
