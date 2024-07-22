    // src/components/DropdownTab.js
    import React from 'react';
    import './dropdown.css'; // CSS for dropdown styling

    const DropdownTab = ({ isVisible }) => {
    return (
        <div className={`dropdown-tab ${isVisible ? 'visible' : ''}`}>
        <ul>
            <li><a href="https://www.geoguessr.com/">GeoGuessr</a></li>
            <li><a href="https://www.sporcle.com/games/category/geography">Sporcle</a></li>
            <li><a href="https://www.seterra.com/">Seterra</a></li>
            <li><a href="https://worldle.teuteuf.fr/y">Worldle</a></li>
            <li><a href="https://globle-game.com/">Globle</a></li>
        </ul>
        </div>
    );
    };  

    export default DropdownTab;
