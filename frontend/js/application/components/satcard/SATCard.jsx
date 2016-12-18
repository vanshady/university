import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import * as d3 from 'd3';
import * as ReactFauxDOM from 'react-faux-dom';
import Dimensions from 'react-dimensions';
import mockdata from './mockdata';

// const request = require('superagent');

class SATCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            sat: [],
        };

        this.renderSVG = this.renderSVG.bind(this);

        // const self = this;
        // request
        //     .get(self.props.url + '/all_sat/')
        //     .end((err, res) => {
        //         if (res) {
        //             self.setState({
        //                 universities: JSON.parse(res.text),
        //             });
        //         }
        //     });
    }

    renderSVG() {
        const div = ReactFauxDOM.createElement('div');

        if (this.state.expanded) {
            // initialize the dimensions
            const padding = 20;
            const margin = { top: 20, right: 20, bottom: 30, left: 50 };
            const svg = d3.select(div).append('svg')
                .attr('width', this.props.containerWidth - margin.left - margin.right)
                .attr('height', 500);
            const width = +svg.attr('width') - margin.left - margin.right;
            const height = +svg.attr('height') - margin.top - margin.bottom - 10;

            const midline = (height - padding) / 2;

            // initialize the x scale
            const xScale = d3.scaleLinear()
                        .range([padding, width - padding]);

            // initialize the x axis
            const xAxis = d3.axisBottom()
                        .scale(xScale);

            function randomJitter() {
                const seed = Math.round(Math.random() * 1) === 0 ? -5 : 5;

                return midline + Math.floor((Math.random() * seed) + 1);
            }

            const csv = mockdata.map(d => ({ date: d.date, value: parseFloat(d.value) }));
            let data = csv.map(d => d.value);

            data = data.sort(d3.ascending);

            // calculate the boxplot statistics
            // const minVal = data[0];
            const q1Val = d3.quantile(data, 0.25);
            const medianVal = d3.quantile(data, 0.5);
            const q3Val = d3.quantile(data, 0.75);
            const iqr = q3Val - q1Val;
            const maxVal = data[data.length - 1];
            const outliers = [];
            let lowerWhisker = Infinity;
            let upperWhisker = -Infinity;

            // lowerWhisker = d3.max([minVal, q1Val - iqr])
            // upperWhisker = d3.min([maxVal, q3Val + iqr]);

            let index = 0;

            // search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
            while (index < data.length && lowerWhisker === Infinity) {
                if (data[index] >= (q1Val - 1.5 * iqr)) {
                    lowerWhisker = data[index];
                } else {
                    outliers.push(data[index]);
                }

                index += 1;
            }

            index = data.length - 1; // reset index to end of array

            // search for the upper whisker, the maximum value within q1Val + 1.5*iqr
            while (index >= 0 && upperWhisker === -Infinity) {
                if (data[index] <= (q3Val + 1.5 * iqr)) {
                    upperWhisker = data[index];
                } else {
                    outliers.push(data[index]);
                }

                index -= 1;
            }

            // map the domain to the x scale +10%
            xScale.domain([0, maxVal * 1.10]);

            // append the axis
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0, ' + (height - padding) + ')')
                .call(xAxis);

            // draw verical line for lowerWhisker
            svg.append('line')
                .attr('class', 'whisker')
                .attr('x1', xScale(lowerWhisker))
                .attr('x2', xScale(lowerWhisker))
                .attr('stroke', 'black')
                .attr('y1', midline - 10)
                .attr('y2', midline + 10);

            // draw vertical line for upperWhisker
            svg.append('line')
                .attr('class', 'whisker')
                .attr('x1', xScale(upperWhisker))
                .attr('x2', xScale(upperWhisker))
                .attr('stroke', 'black')
                .attr('y1', midline - 10)
                .attr('y2', midline + 10);

            // draw horizontal line from lowerWhisker to upperWhisker
            svg.append('line')
                .attr('class', 'whisker')
                .attr('x1', xScale(lowerWhisker))
                .attr('x2', xScale(upperWhisker))
                .attr('stroke', 'black')
                .attr('y1', midline)
                .attr('y2', midline);

            // draw rect for iqr
            svg.append('rect')
                .attr('class', 'box')
                .attr('stroke', 'black')
                .attr('fill', 'white')
                .attr('x', xScale(q1Val))
                .attr('y', padding + midline - 30)
                .attr('width', xScale(iqr) - padding)
                .attr('height', 20);

            // draw vertical line at median
            svg.append('line')
                .attr('class', 'median')
                .attr('stroke', 'black')
                .attr('x1', xScale(medianVal))
                .attr('x2', xScale(medianVal))
                .attr('y1', midline - 10)
                .attr('y2', midline + 10);

            // draw data as points
            svg.selectAll('circle')
                .data(csv)
                .enter()
                .append('circle')
                .attr('r', 2.5)
                .attr('class', (d) => {
                    if (d.value < lowerWhisker || d.value > upperWhisker) {
                        return 'outlier';
                    }

                    return 'point';
                })
                .attr('cy', () => randomJitter())
                .attr('cx', d => xScale(d.value))
                .append('title')
                .text(d => `Date: ${d.date}; value: ${d.value}`);

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

SATCard.PropTypes = {
    containerWidth: React.PropTypes.number,
};

export default Dimensions()(SATCard);
