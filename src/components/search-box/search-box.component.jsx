import { Component } from 'react';
import './search-box.styles.css';
class SearchBox extends Component {
    render() {
        const { searchChanges, placeholder, className } = this.props;
        return (
            <input type="search"
                   className={ className }
                   placeholder={ placeholder }
                   onChange={ searchChanges }
            />
        )
    }
}

export default SearchBox;