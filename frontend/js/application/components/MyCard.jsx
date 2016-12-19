import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class MyCard extends React.Component {
    render() {
        return (
          <Card style={{ marginTop: '10px', marginBottom: '10px' }}>
            <CardHeader
              showExpandableButton
              title={this.props.title}
              actAsExpander
            />

            <CardText expandable>
              <p> { this.props.text } </p>
            </CardText>
          </Card>);
    }
}

MyCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

MyCard.PropTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
};

export default MyCard;
