import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute} from "./sidebarElements"

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon>
                < CloseIcon onClick={toggle} />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"> Pizza </SidebarLink>
                <SidebarLink to="/"> Desert </SidebarLink>
                <SidebarLink to="/"> Full Menu </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/"> Order Now! </SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
