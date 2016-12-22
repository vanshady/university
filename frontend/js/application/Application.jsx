import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import request from 'superagent';
import Header from './components/Header';
import Footer from './components/Footer';
import Panel from './components/Panel';
import MyCard from './components/MyCard';
import SearchCard from './components/searchCard/SearchCard';
import SATCard from './components/SATCard';
import EnrollPercentCard from './components/EnrollPercentCard';
import AvgDebtCard from './components/AvgDebtCard';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        const url = 'https://university-backend.herokuapp.com';
        const self = this;
        request
            .get(url + '/public_tuition_difference')
            .end((err, res) => {
                if (res) {
                    const difference = parseFloat(JSON.parse(res.text)[0].difference);
                    self.setState({ public_difference: Math.round(difference * 100) / 100 });
                }
            });
        request
            .get(url + '/private_tuition_expense_diff')
            .end((err, res) => {
                if (res) {
                    const difference = parseFloat(JSON.parse(res.text)[0].difference);
                    self.setState({ private_difference: Math.round(difference * 100) / 100 });
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
              <h3>Below are the statistics for all universities</h3>
              <SATCard url="https://university-backend.herokuapp.com" />
              <MyCard
                loading={!this.state.public_difference}
                title="Public University Tuition Difference"
              >
                <p>{ `The average difference between out-state and in-state tuition of public universities is $${this.state.public_difference}.` }</p>
              </MyCard>
              <MyCard
                loading={!this.state.private_difference}
                title="Private University Tuition Expense Difference"
              >
                <p>{ `The average expense - tutiion for private universities is $${this.state.private_difference}.` }</p>
              </MyCard>
              <EnrollPercentCard url="https://university-backend.herokuapp.com" />
              <AvgDebtCard url="https://university-backend.herokuapp.com" />
            </Panel>
            <Footer />
          </div>);
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Application;
