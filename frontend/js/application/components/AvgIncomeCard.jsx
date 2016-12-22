import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MyCard from './MyCard';

class AvgIncomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            controlId: 1,
        };

        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/avg_med_inc/1')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text)[0].med_inc;
                    this.setState({ data });
                }
            });
    }

    handleChange(event, index, value) {
        this.setState({ controlId: value, data: undefined });
        const self = this;
        request
            .get(this.props.url + `/avg_med_inc/${value}`)
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text)[0].med_inc;
                    self.setState({ data });
                }
            });
    }

    render() {
        return (
          <MyCard
            loading={!this.state.data}
            title="Average Income"
          >
            <p> The average income of</p>
            <SelectField
              value={this.state.controlId}
              onChange={this.handleChange}
            >
              <MenuItem value={1} key={1} primaryText={'public universities'} />
              <MenuItem value={2} key={2} primaryText={'private non-profit universities'} />
              <MenuItem value={3} key={3} primaryText={'private for-profit universities'} />
            </SelectField>
            <p>{`is $${Math.round(parseFloat(this.state.data) * 10) / 10}`}</p>
          </MyCard>);
    }
}

AvgIncomeCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

AvgIncomeCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default AvgIncomeCard;
