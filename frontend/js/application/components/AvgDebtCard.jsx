import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MyCard from './MyCard';

class AvgDebtCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            controlId: 1,
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/avg_debt_value/1')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    this.setState({
                        data: data.filter(v => v.detail !== 'Total'),
                    });
                }
            });
    }

    handleChange(event, index, value) {
        this.setState({ controlId: value, data: [] });
        const self = this;
        request
            .get(this.props.url + `/avg_debt_value/${value}`)
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    self.setState({
                        data: data.filter(v => v.detail !== 'Total'),
                    });
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
                      <TableHeaderColumn>Race</TableHeaderColumn>
                      <TableHeaderColumn>Average Debt</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {this.state.data.map((row, index) =>
                    (<TableRow key={index}>
                      <TableRowColumn>{row.detail}</TableRowColumn>
                      <TableRowColumn>{`${Math.round(parseFloat(row.debt) * 1000) / 10}%`}</TableRowColumn>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </div>);
        }

        return <div />;
    }

    render() {
        return (
          <MyCard
            loading={this.state.data.length === 0}
            title="Average Debt"
          >
            <p> This is a table showing the average debt per race for</p>
            <SelectField
              value={this.state.controlId}
              onChange={this.handleChange}
            >
              <MenuItem value={1} key={1} primaryText={'public universities'} />
              <MenuItem value={2} key={2} primaryText={'private non-profit universities'} />
              <MenuItem value={3} key={3} primaryText={'private for-profit universities'} />
            </SelectField>
            { this.renderTable() }
          </MyCard>);
    }
}

AvgDebtCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

AvgDebtCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default AvgDebtCard;
