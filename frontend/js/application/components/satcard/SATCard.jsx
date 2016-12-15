import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import * as d3 from 'd3';
import * as ReactFauxDOM from 'react-faux-dom';
import Dimensions from 'react-dimensions';
import mockdata from './mockdata';

class SATCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    renderSVG() {
        const div = ReactFauxDOM.createElement('div');
        if (this.state.expanded) {
            const margin = { top: 20, right: 20, bottom: 30, left: 50 };
            const svg = d3.select(div).append('svg')
                .attr('width', this.props.containerWidth - margin.left - margin.right)
                .attr('height', 500);
            const width = +svg.attr('width') - margin.left - margin.right;
            const height = +svg.attr('height') - margin.top - margin.bottom - 10;
            const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            const parseTime = d3.timeParse('%d-%b-%y');

            const x = d3.scaleTime()
                .rangeRound([0, width]);

            const y = d3.scaleLinear()
                .rangeRound([height, 0]);

            const line = d3.line()
                .x(d => x(d.date))
                .y(d => y(d.close));

            const data = mockdata.map(d => ({ date: parseTime(d.date),
                close: parseFloat(d.close) }));

            x.domain(d3.extent(data, d => d.date));
            y.domain(d3.extent(data, d => d.close));

            g.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom(x));
            
            g.append('text')
                .attr('fill', '#000')
                .attr('x', width / 2)
                .attr('y', height + 20)
                .attr('dy', '0.71em')
                .style('text-anchor', 'middle')
                .text('SAT Median');

            g.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft(y));

            g.append('path')
                .datum(data)
                .attr('class', 'line')
                .attr('d', line);
            return div.toReact();
        }

        return <div />;
    }

    render() {
        return (
          <Card
            expanded={this.state.expanded}
            onExpandChange={(expanded) => { this.setState({ expanded }); }}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            <CardHeader showExpandableButton title="SAT Median Distribution" />

            <CardText expandable> { this.renderSVG() } </CardText>
          </Card>);
    }
}

SATCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default Dimensions()(SATCard);
