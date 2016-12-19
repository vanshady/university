import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

class MyCard extends React.Component {
    render() {
        if (this.props.loading) {
            return (
              <Card style={{ marginTop: '10px', marginBottom: '10px' }}>
                <CardHeader
                  showExpandableButton
                  title={this.props.title}
                  actAsExpander
                />

                <CardText expandable>
                  <LinearProgress />
                  <p style={{ textAlign: 'center' }}>Loading</p>
                </CardText>
              </Card>);
        }

        return (
          <Card style={{ marginTop: '10px', marginBottom: '10px' }}>
            <CardHeader
              showExpandableButton
              title={this.props.title}
              actAsExpander
            />

            <CardText expandable>
              { this.props.children }
            </CardText>
          </Card>);
    }
}

MyCard.childContextTypes = {
    muiTheme: React.PropTypes.object,
};

MyCard.propTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.node,
    loading: React.PropTypes.bool,
};

export default MyCard;
