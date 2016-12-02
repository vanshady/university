'use strict';

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import uuid from 'uuid';
import { isFunction, trim } from 'lodash';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    _newRequest(value) {
        if (value == null) return;
        if (isFunction(this.props.onSearched) && trim(value)) {
            this.props.onSearched(value);
        }
    }

    render() {
        let inputStyle = {
            padding: '16px 16px 11px 60px',
            boxSizing: 'border-box'
        };
        let underlineStyle = {marginLeft: '-60px', bottom: '0px'};

        return (
            <div>
              <AutoComplete hintText="Which university are you interested in?"
                dataSource={ this.props.universities }
                fullWidth={ true }
                filter ={ (searchText, key) => { return searchText !== '' && key.substr(0, searchText.length) == searchText;} }
                maxSearchResults={ 10 }
                style={ inputStyle }
                underlineStyle={ underlineStyle }
                onNewRequest={ this._newRequest.bind(this) } />
            </div>
            );
    }
}

SearchBar.propTypes = {onSearched: React.PropTypes.func, universities: React.PropTypes.array };

export default SearchBar;
