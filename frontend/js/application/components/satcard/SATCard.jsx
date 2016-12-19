import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import * as d3 from 'd3';
import * as ReactFauxDOM from 'react-faux-dom';
import Dimensions from 'react-dimensions';
import MyCard from '../MyCard';

const request = require('superagent');

class SATCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.renderSVG = this.renderSVG.bind(this);
        request
            .get(this.props.url + '/all_sat')
            .end((err, res) => {
                if (res) {
                    const data = JSON.parse(res.text).map(
                            d => ({ name: d.name, value: parseInt(d.sat_avg, 10) }),
                        );

                    this.setState({
                        data,
                        median: d3.quantile(data.map(d => d.value), 0.5),
                    });
                }
            });
    }

    renderSVG() {
        const div = ReactFauxDOM.createElement('div');

        const padding = 20;
        const margin = { top: 20, right: 20, bottom: 0, left: 20 };
        const svg = d3.select(div).append('svg')
            .attr('width', this.props.containerWidth - margin.left - margin.right)
            .attr('height', 160);
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;

        const midline = (height - padding) / 2;

        const boxHeight = 60;

        // initialize the x scale
        const xScale = d3.scaleLinear()
                    .range([padding, width - padding]);

        // initialize the x axis
        const xAxis = d3.axisBottom()
                    .scale(xScale);

        const randomJitter = () => {
            const seed = Math.round(Math.random() * 1) === 0 ? -15 : 15;

            return midline + Math.floor((Math.random() * seed) + 1);
        };

        const csv = this.state.data;
        let data = csv.map(d => d.value);

        data = data.sort(d3.ascending);

        // calculate the boxplot statistics
        const q1Val = d3.quantile(data, 0.25);
        const medianVal = d3.quantile(data, 0.5);
        const q3Val = d3.quantile(data, 0.75);
        const iqr = q3Val - q1Val;
        // const maxVal = data[data.length - 1];
        const outliers = [];
        let lowerWhisker = Infinity;
        let upperWhisker = -Infinity;

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

        // map the domain
        xScale.domain([600, 1600]);

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
            .attr('y1', midline - boxHeight / 2)
            .attr('y2', midline + boxHeight / 2);

        // draw vertical line for upperWhisker
        svg.append('line')
            .attr('class', 'whisker')
            .attr('x1', xScale(upperWhisker))
            .attr('x2', xScale(upperWhisker))
            .attr('stroke', 'black')
            .attr('y1', midline - boxHeight / 2)
            .attr('y2', midline + boxHeight / 2);

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
            .attr('y', midline - boxHeight / 2)
            .attr('width', xScale(q3Val) - xScale(q1Val) - padding)
            .attr('height', boxHeight);

        // draw vertical line at median
        svg.append('line')
            .attr('class', 'median')
            .attr('stroke', 'black')
            .attr('x1', xScale(medianVal))
            .attr('x2', xScale(medianVal))
            .attr('y1', midline - boxHeight / 2)
            .attr('y2', midline + boxHeight / 2);

        // draw data as points
        svg.selectAll('circle')
            .data(csv)
            .enter()
            .append('circle')
            .attr('r', 3)
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

    render() {
        return (
          <MyCard
            loading={this.state.data.length === 0 || !this.state.median}
            title="SAT Average Distribution"
          >
            { this.renderSVG() }
            <p> { `This is a boxplot showing the distribution
              of SAT average score of each university.
              The median average SAT score is ${this.state.median}.` }
            </p>
          </MyCard>);
    }
}

SATCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

SATCard.propTypes = {
    containerWidth: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired,
};

export default Dimensions({ elementResize: true })(SATCard);
