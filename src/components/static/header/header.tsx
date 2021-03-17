import React, { useEffect } from 'react';

interface HeaderProps {
    title: String,
    links: Array<String>,
}

const Header = (props: HeaderProps) => {

    useEffect(() => {
        
     }, [])


    return (
        <div className="header_wrapper">
            <div className="header">

            </div>
        </div>
    )
}

export default Header;