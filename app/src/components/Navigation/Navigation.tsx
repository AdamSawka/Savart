import React from 'react';

interface Props {
    navVisible:boolean;
    setNavVisible:(value:boolean)=>void;
    toggleNavVisibility:()=>void;
    NavLinksList:any;
}

function Navigation({navVisible,setNavVisible, toggleNavVisibility, NavLinksList}:Props) {

    return (
        <div>Nav</div>
    );
}

export default Navigation;