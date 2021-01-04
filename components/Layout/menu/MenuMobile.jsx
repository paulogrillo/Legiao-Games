import {
    CgMenuGridO
} from "react-icons/cg"

import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
    <div className="absolute py-10 right-14">   
        <Menu  menuButton={
        <MenuButton  className="flex justify-center ml-10" >
            <CgMenuGridO 
            
                size={36} 
                />

        </MenuButton>}>
        <MenuItem  className={
        ({ hover, active }) =>
            active ? 'my-menuitem-active'
                : hover ? 'my-menuitem-hover'
                    : 'my-menuitem'
    }>
            <img 
                src="/img/logos/gtav.png" 
                alt="" 
                className="w-40"
                />
        </MenuItem>
        <MenuItem>
            <img 
                src="/img/logos/csgo.png" 
                alt="" 
                className="w-40"
                />
        </MenuItem>
        <MenuItem className="">
            <img 
                src="/img/logos/lol.png" 
                alt="" 
                className="w-40"
                />
        </MenuItem>
    </Menu>
</div>
        
    );
    
}
