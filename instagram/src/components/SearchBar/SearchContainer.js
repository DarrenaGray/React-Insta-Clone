import React from 'react';
import './SearchBar.css';
import Search from './Search';
import IGlogo from '../../assets/ig_logo.png';

// import * as Icon from 'react-feather';

const SearchBar = props => {
    return (
        <div className="ig-imgs">
          <div>
            {/* <Icon.Heart className="icon" /> */}
            {/* <img className="ig-camera" src="" alt="" /> */}
            <img className="ig-logo"src={IGlogo} alt={IGlogo}/>
            </div>
            <div>
                <img className="ig-icons" src="" alt="" />
                <img className="ig-icons" src="" alt="" />
                <img className="ig-icons" src="" alt="" />
            </div>
            <Search />
        </div>
    );
}

export default SearchBar;