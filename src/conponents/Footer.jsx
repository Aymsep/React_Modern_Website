import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {BsFacebook,BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="" />
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae eligendi dolorum, debitis quia quam.</p>
                <div className="footer_socials">
                    <a href="https:/linkedin.com" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin/>
                    </a>
                    <a href="https:/linkedin.com" target="_blank" rel="noopener noreferrer">
                        <BsFacebook/>
                    </a>
                    <a href="https:/linkedin.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitter/>
                    </a>
                    <a href="https:/linkedin.com" target="_blank" rel="noopener noreferrer">
                        <BsInstagram/>
                    </a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/about">Blog</Link>
                <Link to="/plans">Case Studies</Link>
                <Link to="/trainers">Events</Link>
                <Link to="/gallery">Communities</Link>
                <Link to="/contact">FAQS</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/about">Contact Us</Link>
                <Link to="/plans">Support</Link>
                <Link to="/trainers">Trainers</Link>
            </article>


        </div>
            <div className="footer_copyright">
                <small>2022 ayman &copy; All rights reserved.</small>
            </div>
    </footer>
  )
}

export default Footer