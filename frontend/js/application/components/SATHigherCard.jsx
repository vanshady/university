import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import MyCard from './MyCard';

class SATHigherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sat: 1200,
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/sat_higher/1200')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    this.setState({ data });
                }
            });
    }

    handleChange(event, index, value) {
        this.setState({ sat: value, data: [] });
        const self = this;
        request
            .get(this.props.url + `/sat_higher/${value}`)
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
                      <TableHeaderColumn>SAT Average</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {this.state.data.map((row, index) =>
                    (<TableRow key={index}>
                      <TableRowColumn>{row.name}</TableRowColumn>
                      <TableRowColumn>{parseFloat(row.sat_avg)}</TableRowColumn>
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
            title="Average SAT Higher"
          >
            <p> This is a table showing the universities with an average SAT higher than</p>
            <TextField
              id="text-field-controlled"
              value={this.state.sat}
              onChange={this.handleChange}
            />
            { this.renderTable() }
          </MyCard>);
    }
}

SATHigherCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

SATHigherCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default SATHigherCard;
