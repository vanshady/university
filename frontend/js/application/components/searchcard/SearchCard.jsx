import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
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
        const self = this;
        request
            .get('http://127.0.0.1:3000/university_list')
            .end(function (err, res) {
                if (res) {
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

    onSearched(university) {
        this.setState({
            university: '',
            expanded: true,
        });
        this.req = this.requestUniversity(university, function (err, res) {
            console.log(res.text);
            if (JSON.parse(res.text)) {
                this.setState({
                    university: JSON.parse(res.text),
                });
            } else {
                this.setState({
                    university: errorMessage,
                });
            }
        }.bind(this));
    }

    requestUniversity(name, done) {
        request
            .get(`http://127.0.0.1:3000/university/${name}`)
            .end(function (err, res) {
                if (res) {
                    done(err, res);
                }
            });
    }

    handleExpandChange(expanded) {
        this.setState({ expanded });
    }

    render() {
        return (
          <Card
            expanded={this.state.expanded}
            onExpandChange={ this.handleExpandChange.bind(this)}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            <CardHeader showExpandableButton title="Search a university" />

            <SearchBar
              onSearched={this.onSearched.bind(this)}
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
