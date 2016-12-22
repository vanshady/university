import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MyCard from './MyCard';

class ClosedUniCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/closed_unit')
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
            .get(this.props.url + '/closed_unit')
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
                      <TableHeaderColumn>Universities</TableHeaderColumn>
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
        return (
          <MyCard
            loading={this.state.data.length === 0}
            title="Closed University"
          >
            <p> This is a table showing all the closed universities</p>
            { this.renderTable() }
          </MyCard>);
    }
}

ClosedUniCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

ClosedUniCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default ClosedUniCard;
