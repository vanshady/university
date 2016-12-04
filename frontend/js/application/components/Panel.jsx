import React from 'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import UI from 'UI';

class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paperStyle: this.getPaperStyle(),
            zDepth: this.getZDepth(),
        };
        this.onResize = _.debounce(this.onResize, 150).bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false);
    }

    onResize(e) {
        this.setState({
            paperStyle: this.getPaperStyle(),
            zDepth: this.getZDepth(),
        });
    }

    getPaperStyle() {
        const style = {
            // minHeight: '350px',
            margin: '5px auto 0 auto',
            paddingBottom: '10px',
            backgroundColor: '#fff',
        };
        if (UI.windowWidth() <= UI.BREAK_POINT) {
            style.width = '100%';
        } else {
            style.width = UI.BREAK_POINT + 'px';
        }
        return style;
    }

    getZDepth() {
        return UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1;
    }

    render() {
        return (
          <Paper style={this.state.paperStyle} zDepth={0} rounded={false}>
            { this.props.children }
          </Paper>);
    }
}

Panel.propTypes = { children: React.PropTypes.arrayOf(React.PropTypes.node) };

export default Panel;
