'use client';
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu
} from "@nextui-org/react";

import Logo from "./Logo";
import {menuItems} from "../lib/data";
function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Logo/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="end">

                {menuItems.map((item, i)=><NavbarItem className="pr-5 tracking-widest text-xs" key={i}>
                    <Link className={item === "Kontakt" && "bg-black text-white px-3 py-1.5 rounded-xl"} href={item === "Main" ? "/" : `/${item.toLowerCase().replace(' ', '_').replace('ę', 'e')}`}>{item}</Link>
                </NavbarItem>)}

            </NavbarContent>

            <NavbarMenu>

                {menuItems.map((item, i)=><NavbarItem className="pr-5 tracking-widest text-xs" key={i}>
                    <Link href={item === "Main" ? "/" : `/${item.toLowerCase().replace(' ', '_').replace('ę', 'e')}`}>{item}</Link>
                </NavbarItem>)}

            </NavbarMenu>
        </Navbar>
    );
}

export default Header;