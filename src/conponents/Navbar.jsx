import './Navbar.css'
import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [isNavshowing,setisNavshowing] = useState(false)
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <nav>
        <div className="container container_navbar">
            <Link className="logo" to='/' 
            onClick={()=> setisNavshowing(false)}
            >
                <img src={logo} alt="" onClick={scrollToTop} />
            </Link>
            <ul className={`navbar_links ${isNavshowing? 'show_navbar':'hide_navbar'} }`}>
              {
                links.map(({name,path},index) =>{
                    return (
                        <li key={index} onClick={scrollToTop}>
                            <NavLink to={path}  className={({isActive}) => isActive? 'active_navbar' : ''}
                            onClick={()=> setisNavshowing(prev=>!prev)}
                            >{name}</NavLink>
                        </li>
                    )
                })
              }
            </ul>
            <button className="navbar_toggle" onClick={()=> setisNavshowing(prev=>!prev)}>
                {
                    isNavshowing?  <AiOutlineClose/>:<FaBars/>
                }
            </button>

        </div>
    </nav>
  )
}

export default Navbar