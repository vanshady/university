import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import request from 'superagent';
import MyCard from './MyCard';

class DistCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { uni1: '', uni2: '', loading: false };

        this.requestDistance = this.requestDistance.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.renderDistance = this.renderDistance.bind(this);
    }

    requestDistance() {
        this.setState({ distance: undefined, loading: true });
        request
            .get(`${this.props.url}/unit_dist/${this.state.id1}/${this.state.id2}`)
            .end((err, res) => {
                this.setState({ loading: false });
                if (res && res.text && JSON.parse(res.text) && JSON.parse(res.text)[0]) {
                    const distance = JSON.parse(res.text)[0].distance;
                    this.setState({ distance });
                }
            });
    }

    handleChange1(event) {
        const value = event.target.value;
        this.setState({ uni1: value, id1: undefined });
        const self = this;
        request
            .get(this.props.url + `/search_name/${value}`)
            .end((err, res) => {
                if (res && JSON.parse(res.text) && JSON.parse(res.text)[0]) {
                    const data = JSON.parse(res.text)[0].unit_id;

                    self.setState({ id1: data });
                }
            });
    }

    handleChange2(event) {
        const value = event.target.value;
        this.setState({ uni2: value, id2: undefined });
        const self = this;
        request
            .get(this.props.url + `/search_name/${value}`)
            .end((err, res) => {
                if (res && JSON.parse(res.text) && JSON.parse(res.text)[0]) {
                    const data = JSON.parse(res.text)[0].unit_id;

                    self.setState({ id2: data });
                }
            });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.requestDistance();
        }
    }

    renderDistance() {
        if (this.state.loading) {
            return [<LinearProgress key={1} />, <p key={2} style={{ textAlign: 'center' }}>Loading</p>];
        }

        if (this.state.distance >= 0) {
            return [
                <Divider key={1} />,
                <p key={2}>
                    The distance between these two universities is
                    about {Math.round(parseFloat(this.state.distance) * 10) / 10} miles.
                </p>,
            ];
        }

        return null;
    }

    render() {
        return (
          <MyCard
            title="Distance Between Universities"
          >
            <TextField
              hintText="From University"
              value={this.state.uni1}
              underlineShow={false}
              onChange={this.handleChange1}
              onKeyPress={this.handleKeyPress}
            />
            <Divider />
            <TextField
              hintText="To University"
              value={this.state.uni2}
              underlineShow={false}
              onChange={this.handleChange2}
              onKeyPress={this.handleKeyPress}
            />
            <RaisedButton label="Get distance" primary onClick={this.requestDistance} />
            {this.renderDistance()}
          </MyCard>);
    }
}

DistCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

DistCard.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default DistCard;
