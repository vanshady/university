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

        function handleResponse(err, res) {
            if (res.status !== res.notFound || JSON.parse(res.text)) {
                self.setState({
                    university: Object.assign(self.state.university, JSON.parse(res.text)[0]),
                });
            } else {
                self.setState({ search_failed: true });
            }
        }

        function makeRequest(api, id) {
            request
                .get(self.props.url + `/${api}/${id}`)
                .end((err, res) => {
                    self.setState({ searching: false });
                    if (res) {
                        handleResponse(err, res);
                    } else {
                        self.setState({ search_failed: true });
                    }
                });
        }

        function requestUniversity(id) {
            makeRequest('university', id);
            makeRequest('university_address', id);
            makeRequest('tuition_difference', id);
            makeRequest('tuition_expense_difference', id);
        }

        function checkId() {
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
                                requestUniversity(JSON.parse(res.text)[0].unit_id);
                            } else {
                                self.setState({ search_failed: true });
                            }
                        } else {
                            self.setState({ search_failed: true });
                        }
                    });
            } else {
                requestUniversity(university.unit_id);
            }
        }

        this.setState({
            university: {},
            expanded: true,
            searching: true,
            search_failed: false,
        });

        checkId();
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
       
        if (this.state.searching) {
            return <LinearProgress mode="indeterminate" />;
        }

        if (this.state.search_failed) {
            return <h3 style={{ color: 'red' }}>{errorMessage}</h3>;
        }

        if (this.state.university) {
            const university = this.state.university;

            let key = 0;

            const createChip = (children) => {
                res.push(<Chip style={{ margin: 4 }} backgroundColor={amber400} key={key}>
                  { children }
                </Chip>);
                key += 1;
            };

            if (university.alias && university.alias.length > 0) {
                createChip(<div><b>Alias:</b> {university.alias}</div>);
            }

            if (university.state_name && university.state_name.length > 0) {
                createChip(<div><b>State:</b> {university.state_name}</div>);
            }

            if (university.city_name && university.city_name.length > 0) {
                createChip(<div><b>City:</b> {university.city_name}</div>);
            }

            if (university.zip && university.zip.length > 0) {
                createChip(<div><b>Zip:</b> {university.zip}</div>);
            }

            if (university.url && university.url.length > 0) {
                createChip(<a href={'http://' + university.url}>{'http://' + university.url}</a>);
            }

            if (university.latitude) {
                createChip(<div><b>Latitude:</b> {Math.round(university.latitude * 100) / 100}</div>);
            }

            if (university.longitude) {
                createChip(<div><b>Longitude:</b> {Math.round(university.longitude * 100) / 100}</div>);
            }
            
            if (university.main_campus && typeof university.main_campus === 'boolean') {
                if (university.main_campus) createChip(<b>Main Campus</b>);
                else createChip(<b>Not Main Campus</b>);
            }

            if (typeof university.num_branches === 'number' && university.num_branches > 1) {
                createChip(<b>{university.num_branches} branches</b>);
            }

            if (university.historically_black === true) {
                createChip(<b>Historically Black</b>);
            }

            if (university.predominatly_black === true) {
                createChip(<b>Predominantly Black</b>);
            }

            if (university.men_only === true) {
                createChip(<b>Men Only</b>);
            }

            if (university.women_only === true) {
                createChip(<b>Women Only</b>);
            }

            if (university.operating === false) {
                createChip(<b>Not Operating</b>);
            }

            if (university.tuition_difference !== 0) {
                createChip(<div><b>Outstate/Instate Tuition Difference:</b> {university.tuition_difference}</div>);
            }

            if (university.tuition_expense_difference !== 0) {
                createChip(<div><b>Expense - Tuition:</b> {university.tuition_expense_difference}</div>);
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
