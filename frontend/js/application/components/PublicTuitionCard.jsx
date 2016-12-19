import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const request = require('superagent');

class PublicTuitionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            difference: 0,
        };

        const self = this;
        request
            .get(self.props.url + '/public_tuition_difference')
            .end((err, res) => {
                if (res) {
                    const difference = parseFloat(JSON.parse(res.text)[0].difference);
                    self.setState({ difference: Math.round(difference * 100) / 100 });
                }
            });
    }

    render() {
        return (
          <Card
            expanded={this.state.expanded}
            onExpandChange={(expanded) => { this.setState({ expanded }); }}
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            <CardHeader
              showExpandableButton
              title="Public University Tuition Difference"
              actAsExpander
            />

            <CardText expandable>
              <p> { `The average difference between out-state and in-state tuition of public universities is $${this.state.difference}.` } </p>
            </CardText>
          </Card>);
    }
}

PublicTuitionCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

PublicTuitionCard.PropTypes = {
    url: React.PropTypes.string.isRequired,
};

export default PublicTuitionCard;
