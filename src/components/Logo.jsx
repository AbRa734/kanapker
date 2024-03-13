import React from 'react';
import {Link} from "@nextui-org/react";
import logo from "../../public/logo.png";
import Image from "next/image";

function Logo() {
    return (
        <div>
            <Link href="/">
                <Image src={logo} alt="" width={70} height={40}/>
            </Link>
        </div>
    );
}

export default Logo;