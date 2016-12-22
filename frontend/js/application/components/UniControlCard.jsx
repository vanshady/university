import React from 'react';
import request from 'superagent';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MyCard from './MyCard';

class UniControlCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            controlId: 1,
        };

        this.renderTable = this.renderTable.bind(this);
        this.handleChange = this.handleChange.bind(this);

        request
            .get(this.props.url + '/unit_control/1')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text);

                    this.setState({ data });
                }
            });
    }

    handleChange(event, index, value) {
        this.setState({ controlId: value, data: [] });
        const self = this;
        request
            .get(this.props.url + `/unit_control/${value}`)
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
            title="University by Type"
          >
            <p> This is a table showing all the</p>
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

UniControlCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

UniControlCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default UniControlCard;
