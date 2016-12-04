import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SearchBar from './SearchBar';

const request = require('superagent');

const errorMessage = 'Sorry no result found';

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            university: '',
            universities: [],
            expanded: true,
        };
        this.onSearched = this.onSearched.bind(this);
        const self = this;
        request
            .get('http://127.0.0.1:3000/university_list')
            .end((err, res) => {
                if (res) {
                    self.setState({
                        universities: JSON.parse(res.text),
                    });
                }
            });
    }

    onSearched(university) {
        const self = this;
        function requestUniversity(name, done) {
            request
                .get(`http://127.0.0.1:3000/university/${name}`)
                .end((err, res) => {
                    if (res) {
                        done(err, res);
                    }
                });
        }
        function handleResponse(err, res) {
            if (JSON.parse(res.text)) {
                self.setState({
                    university: JSON.parse(res.text),
                });
            } else {
                self.setState({
                    university: errorMessage,
                });
            }
        }
        this.setState({
            university: '',
            expanded: true,
        });
        this.req = requestUniversity(university, handleResponse);
    }

    renderUniversity() {
        const res = [];
        const university = this.state.university;
        if (university) {
            if (university === errorMessage) {
                return <h3 style={{ color: 'red' }}>{errorMessage}</h3>;
            }
            let key = 0;
            Object.keys(university).forEach((prop) => {
                if (university[prop] && university[prop] !== 'NULL') {
                    res.push(<p key={key}><b>{ prop }: </b>{university[prop]}</p>);
                }
                key += 1;
            });
        }
        return res;
    }

    render() {
        return (
          <Card
            expanded={this.state.expanded}
            onExpandChange={(expanded) => { this.setState({ expanded }); }}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            <CardHeader showExpandableButton title="Search a university" />

            <SearchBar
              onSearched={this.onSearched}
              universities={this.state.universities}
              hintText="Which university are you interested in?"
            />

            <CardText expandable>
              { this.renderUniversity() }
            </CardText>
          </Card>);
    }
}

SearchCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

export default SearchCard;
