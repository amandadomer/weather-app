import React from 'react';
import './searchBar.css'

const SearchBar = () => {
    return (
        <div>
            <form >
                <input className="form-control" type="search" placeholder="Enter your location" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    )
};
export default SearchBar;
