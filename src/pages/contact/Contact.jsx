import Main_Header from '../../conponents/Main_Header'
import header_image from '../../images/header_bg_2.jpg'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import './Contact.css'



const Contact = () => {
  return (
    <>
    <Main_Header title="Get In Touch" image={header_image} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum! "/>

    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <AiTwotoneMail/>
          </a>

          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <BsFacebook/>
          </a>

          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp/>
          </a>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact