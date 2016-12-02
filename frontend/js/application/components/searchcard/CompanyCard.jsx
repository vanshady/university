'use strict';

import React from 'react';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SearchBar from './SearchBar.jsx';

var request = require('superagent');
const errorMessage = "Sorry no result found";

class SearchCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            university: '',
            universities: [],
            expanded: true,
        };
        const self = this;
        request
            .get('http://127.0.0.1:3000/company_list')
            .end(function (err, res) {
                    if (res) {
                        self.setState({
                            universities: JSON.parse(res.text)
                        })
                    }
                });
    }
    
    requestUniversity(name, done) {
        request
            .post('http://127.0.0.1:3000/graphql')
            .set('Content-Type', 'application/json')
            .send({ "query": "{object(where:{name:\"" + name + "\"}){name, domain, homepage_url, overview, founded_at}}" })
            .end(function (err, res) {
                    if (res) {
                        done(err, res)
                    }
                });
    }

    renderUniversity() {
        var res = [];
        if (this.state.university) {
            var university = this.state.university;
            if (university == errorMessage) {
                return <h3 style={{color: 'red'}}>{errorMessage}</h3>;
            }
            var key = 0;
            for (var prop in university) {
                if (university[prop]) {
                    res.push(<p key={key}><b>{ prop }: </b>{university[prop]}</p>);
                }
                key++;
            }
        }
        return res;
    }

    _onSearched(university) {
        this.setState({
            university: '',
            expanded: true
        });
        this.req = this.requestUniversity(university, function (err, res) {
            if (JSON.parse(res.text).data && JSON.parse(res.text).data.object[0]) {
                this.setState({
                    university: JSON.parse(res.text).data.object[0]
                })} else {
                    this.setState({
                    university: errorMessage
                })
                }
                
        }.bind(this)); 
    }

    _handleExpandChange(expanded) {
        this.setState({expanded: expanded});
    }

    render() {
        return (
            <Card expanded={ this.state.expanded } onExpandChange={ this._handleExpandChange.bind(this) }
                style={{ marginTop: '10px', marginBottom: '10px' }}>
                <CardHeader showExpandableButton title="Search a company" />
                <SearchBar onSearched={ this._onSearched.bind(this) } universities={ this.state.universities } />
                <CardText expandable={true}>
                    { this.renderUniversity() }
                </CardText>
            </Card>
        );
    }
}

SearchCard.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default SearchCard;