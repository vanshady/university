import React from 'react';
import AppBar from 'material-ui/AppBar';
import _ from 'lodash';
import UI from 'UI';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1,
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
            zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
        });
    }


    render() {
        return (
          <AppBar
            title="University Dashboard"
            showMenuIconButton={false}
            zDepth={this.state.zDepth}
          />);
    }
}

export default Header;
