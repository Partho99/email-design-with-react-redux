import React from 'react';
import './SidebarOption.css'

const SidebarOption = ({Icon, number, title, selected}) => {
    return (
        // backticks used for string interpolation
        <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;