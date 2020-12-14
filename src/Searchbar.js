import React, { Component } from 'react';



let Searchbar = () => {

    return (    
        <div className="input-field">
            <input id="search" type="search" required>
                
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        </div>
    )

}

export default Searchbar;

