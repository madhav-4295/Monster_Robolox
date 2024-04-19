import { Component } from "react";
import  './search-box.css';

class SearchBox extends Component{
    render(){
        const {placeHolder, onChangeHandler, className} = this.props;
        return(
            <input 
            className={`search-box ${className}`} 
            type='search' 
            placeholder={placeHolder}
            onChange={onChangeHandler}/>

        )
    }
}
export default SearchBox;
