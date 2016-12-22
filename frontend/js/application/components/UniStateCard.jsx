import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MyCard from './MyCard';

class UniStateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            state: 'Maryland',
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/unit_state/Maryland')
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
            .get(this.props.url + `/unit_state/${value}`)
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
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {this.state.data.map((row, index) =>
                    (<TableRow key={index}>
                      <TableRowColumn>{row.name}</TableRowColumn>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </div>);
        }

        return <div />;
    }

    render() {
        const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'American Samoa', 'Federated States of Micronesia', 'Guam', 'Marshall Islands', 'Northern Mariana Islands', 'Palau', 'Puerto Rico', 'Virgin Islands'];

        return (
          <MyCard
            loading={this.state.data.length === 0}
            title="University in States"
          >
            <p> This is a table showing all the universities in</p>
            <SelectField
              value={this.state.state}
              onChange={this.handleChange}
            >
              {states.map((row, index) => (
                <MenuItem value={row} key={index} primaryText={row} />
              ))}
            </SelectField>
            { this.renderTable() }
          </MyCard>);
    }
}

UniStateCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

UniStateCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default UniStateCard;
