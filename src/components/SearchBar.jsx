import { Component } from "react";

class SearchBar extends Component{

    render(){
        const {onSearchChange}= this.props
        return(
            <input className='search-box' type='search' placeholder='Get your Monster'
          onChange={onSearchChange } />
        )
    }
}


export default SearchBar