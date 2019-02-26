import React from 'react';
import './SearchBar.css';
import Search from './Search';

import IGicon from '../../assets/ig_logo_icon.png';
import IGlogo from '../../assets/ig_logo.png';

const SearchBar = () => {
    return (
        <div className="ig-imgs">
          <div>
            <img className="ig-camera" src={IGicon} alt={IGicon} />
            <img className="ig-logo"src={IGlogo} alt={IGlogo}/>
            </div>
            <div>
                <img className="ig-icons" />
                <img className="ig-icons" />
                <img className="ig-icons" />
            </div>
            <Search />
        </div>
    );
}

export default SearchBar;