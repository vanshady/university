import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { amber400 } from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
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
            searching: false,
            search_failed: false,
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
                let name = university;

                if (university.substring(0, university.lastIndexOf(',')) === self.state.universities[0].name) {
                    name = self.state.universities[0].name;
                }

                request
                    .get(self.props.url + '/search_name/' + name)
                    .end((err, res) => {
                        self.setState({ searching: false });
                        if (err && err.status === 404) {
                            self.setState({ search_failed: true });
                            return;
                        }
                        if (!err && res && JSON.parse(res.text)
                            && Array.isArray(JSON.parse(res.text))
                            && JSON.parse(res.text).length === 1) {
                            const uni = JSON.parse(res.text)[0];
                            if (uni.name === name) {
                                request
                                    .get(self.props.url + `/university/${JSON.parse(res.text)[0].unit_id}`)
                                    .end((er, re) => {
                                        if (res) {
                                            done(er, re);
                                        }
                                    });
                            } else {
                                self.setState({ search_failed: true });
                            }
                        } else {
                            self.setState({ search_failed: true });
                        }
                    });
            } else {
                request
                    .get(self.props.url + `/university/${university.unit_id}`)
                    .end((err, res) => {
                        self.setState({ searching: false });
                        if (res) {
                            done(err, res);
                        } else {
                            self.setState({ search_failed: true });
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
                self.setState({ search_failed: true });
            }
        }

        this.setState({
            university: '',
            expanded: true,
            searching: true,
            search_failed: false,
        });

        this.req = requestUniversity(handleResponse);
    }

    onUpdateInput(text) {
        const self = this;
        request
            .get(self.props.url + '/search_name/' + text)
            .end((err, res) => {
                if (err && err.status === 404) {
                    return;
                }

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
        if (this.state.searching) {
            return <LinearProgress mode="indeterminate" />;
        }

        if (this.state.search_failed) {
            return <h3 style={{ color: 'red' }}>{errorMessage}</h3>;
        }

        if (university) {
            let key = 0;

            const createChip = (children) => {
                res.push(<Chip style={{ margin: 4 }} backgroundColor={amber400} key={key}>
                  { children }
                </Chip>);
                key += 1;
            };

            if (university.alias && university.alias.length > 0) {
                createChip(<div><b>alias:</b> {university.alias}</div>);
            }

            if (university.city_name && university.city_name.length > 0) {
                createChip(<div><b>location:</b> {university.city_name}</div>);
            }

            if (university.url && university.url.length > 0) {
                createChip(<a href={'http://' + university.url}>website</a>);
            }

            if (university.zip && university.zip.length > 0) {
                createChip(<div><b>zip:</b> {university.zip}</div>);
            }

            if (university.main_campus && typeof university.main_campus === 'boolean') {
                if (university.main_campus) createChip(<b>main campus</b>);
                else createChip(<b>not main campus</b>);
            }

            if (university.num_branches && typeof university.num_branches === 'number') {
                if (university.num_branches > 1) {
                    createChip(<b>{university.num_branches} branches</b>);
                } else if (university.num_branches === 1) {
                    createChip(<b>{university.num_branches} branch</b>);
                } else if (university.num_branches === 0) {
                    createChip(<b>no branch</b>);
                }
            }

            if (university.historically_black === true) {
                createChip(<b>historically black</b>);
            }

            if (university.predominatly_black === true) {
                createChip(<b>predominantly black</b>);
            }

            if (university.men_only === true) {
                createChip(<b>men only</b>);
            }

            if (university.women_only === true) {
                createChip(<b>women only</b>);
            }

            if (university.operating === false) {
                createChip(<b>not operating</b>);
            }
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
            <CardHeader showExpandableButton title="Search a university" actAsExpander />

            <SearchBar
              onSearched={this.onSearched}
              universities={this.state.universities.map(el => ({ name: el.name + ', ' + el.city_name, unit_id: el.unit_id }))}
              onUpdateInput={this.onUpdateInput}
              hintText="Which university are you interested in?"
            />

            <CardText expandable>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>{ this.renderUniversity() }</div>
            </CardText>
          </Card>);
    }
}

SearchCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

SearchCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default SearchCard;
