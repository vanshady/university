import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MyCard from './MyCard';

class RaceRackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            race: 'Asian',
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/race_rank/Asian')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    this.setState({ data });
                }
            });
    }

    handleChange(event, index, value) {
        this.setState({ state: value, data: [] });
        const self = this;
        request
            .get(this.props.url + `/race_rank/${value}`)
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    self.setState({ data });
                }
            });
    }

    renderTable() {
        if (this.state.data.length > 0) {
            return (
              <div style={{ display: 'block' }}>
                <Table height="300px">
                  <TableHeader displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>University</TableHeaderColumn>
                      <TableHeaderColumn>Percentage</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {this.state.data.map((row, index) =>
                    (<TableRow key={index}>
                      <TableRowColumn>{row.name}</TableRowColumn>
                      <TableRowColumn>{`${Math.round(parseFloat(row.percentage) * 10000) / 100}%`}</TableRowColumn>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </div>);
        }

        return <div />;
    }

    render() {
        const races = ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Pacific Islander',
            'Of Two or More Races', 'Non-resident Alien', 'Unknown Race'];

        return (
          <MyCard
            loading={this.state.data.length === 0}
            title="Universities Ranked by Race"
          >
            <p> This is a table showing universities ranked by admission percentage of</p>
            <SelectField
              value={this.state.race}
              onChange={this.handleChange}
            >
              {races.map((row, index) => (
                <MenuItem value={row} key={index} primaryText={row} />
              ))}
            </SelectField>
            { this.renderTable() }
          </MyCard>);
    }
}

RaceRackCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

RaceRackCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default RaceRackCard;
