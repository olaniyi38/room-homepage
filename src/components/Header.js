import SideMenuButton from "./SideMenuButton"
import closeSvg from '../assets/images/icon-close.svg'
import hamburgerSvg from '../assets/images/icon-hamburger.svg'
import { useState } from "react"


const Header = ({activeDarkBg}) => {
    const [isActive,setActive] = useState(false)
    const toggleMenu=()=>{
        setActive(!isActive)
        activeDarkBg()
    }
    return (
        <header>
            <nav className="mobile">
              <span className="title"> <img onClick={toggleMenu} src={hamburgerSvg} alt="" /> room</span>
            <ul className={isActive ? `active` : ''}>
                <img onClick={toggleMenu} src={closeSvg} alt="" />
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            </nav>
    
            <nav className="desktop">
            <span className="title">room</span>
            <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            </nav>
            
        </header>
    )
}

export default Header
