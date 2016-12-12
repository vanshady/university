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
        this.onUpdateInput = this.onUpdateInput.bind(this);
        const self = this;
        request
            .get(self.props.url + '/search_name/')
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
        function requestUniversity(done) {
            if (typeof university === 'string') {
                request
                    .get(self.props.url + '/search_name/' + university)
                    .end((err, res) => {
                        if (!err && res && JSON.parse(res.text) && Array.isArray(JSON.parse(res.text)) && JSON.parse(res.text).length === 0) {
                            const uni = JSON.parse(res.text)[0];
                            if (uni.name == university) {
                                request
                                    .get(self.props.url + `/university/${JSON.parse(res.text)[0].unit_id}`)
                                    .end((er, re) => {
                                        if (res) {
                                            done(er, re);
                                        }
                                    });
                            }
                        }
                    });
            } else {
                request
                    .get(self.props.url + `/university/${university.unit_id}`)
                    .end((err, res) => {
                        if (res) {
                            done(err, res);
                        }
                    });
            }
        }
        function handleResponse(err, res) {
            if (res.status !== res.notFound || JSON.parse(res.text)) {
                self.setState({
                    university: JSON.parse(res.text)[0],
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
        this.req = requestUniversity(handleResponse);
    }

    onUpdateInput(text) {
        const self = this;
        request
            .get(self.props.url + '/search_name/' + text)
            .end((err, res) => {
                if (res && !err) {
                    self.setState({
                        universities: JSON.parse(res.text),
                    });
                }
            });
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
              onUpdateInput={this.onUpdateInput}
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

SearchCard.PropTypes = {
    url: React.PropTypes.string,
};

export default SearchCard;
