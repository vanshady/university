import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { isFunction, trim } from 'lodash';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.newRequest = this.newRequest.bind(this);
    }

    newRequest(value) {
        if (value == null) return;
        if (isFunction(this.props.onSearched) && trim(value)) {
            this.props.onSearched(value);
        }
    }

    render() {
        const inputStyle = {
            padding: '16px 16px 11px 60px',
            boxSizing: 'border-box',
        };
        const underlineStyle = { marginLeft: '-60px', bottom: '0px' };

        return (
          <div>
            <AutoComplete
              hintText={this.props.hintText ? this.props.hintText : 'Search'}
              dataSource={this.props.universities}
              dataSourceConfig={{ text: 'name', value: 'name' }}
              fullWidth
              filter={() => true}
              maxSearchResults={10}
              style={inputStyle}
              underlineStyle={underlineStyle}
              onNewRequest={this.newRequest}
              onUpdateInput={this.props.onUpdateInput}
            />
          </div>);
    }
}

SearchBar.propTypes = {
    onSearched: React.PropTypes.func,
    onUpdateInput: React.PropTypes.func,
    universities: React.PropTypes.arrayOf(React.PropTypes.object),
    hintText: React.PropTypes.string,
};

export default SearchBar;
