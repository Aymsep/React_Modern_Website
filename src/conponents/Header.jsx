import {Link} from 'react-router-dom'
import image from '../images/main_header.png'
import '../pages/home/Home.css'
const Header = () => {
  return (
    <header className="main_header">
        <div className="container header_container">
            <div className="header_left">
                <h4>#70DAYSOFWORKOUTS</h4>
                <h1>Join The Legend Team Of Fitness</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum!
                </p>
                <Link to='/Plans' className='btn lg'>Get Started</Link>
            </div>
            <div className="header_right">
                <div className="header_circle"></div>
                <div className="header_image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header