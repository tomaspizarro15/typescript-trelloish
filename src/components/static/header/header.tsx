import { useEffect, useState } from 'react';
import './header.css'


interface HeaderProps {
    title: string,
    links: Array<{ id: number, label: string }>,
}

const Header = (props: HeaderProps) => {

    const [title, setTitle] = useState("")
    const [scrollPos, setScrollPos] = useState("");
    const [header , setHeader] = useState(true)

    useEffect(() => {
        console.log("React DOM Render")
    } , [header])


    
    const handleScroll = () => {
        if(!window.scrollY) {
            setHeader(false)
        }else {
            setHeader(true)
        }
    }
    window.addEventListener('scroll', handleScroll)
 
    return (
        <div className="header_wrapper">
            <div className={header ? "header dis" : "header" }>
                <ul className="flex_ccr header_links"> {props.links.map((el, i, arr) => {
                    return (
                        <li className={header ? "header_tools dis" : "header_tools"} key={el.id}>
                            <p>{el.label}</p>
                        </li>
                    )
                })}</ul>
            </div>
        </div>
    )
}

export default Header;