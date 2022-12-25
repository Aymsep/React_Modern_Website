import './Trainers.css'
import Main_Header from '../../conponents/Main_Header'
import image from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
import Trainer from '../../conponents/Trainer'

const Trainers = () => {
  return (
    <>
    <Main_Header title="Our Trainers" image={image} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum" />
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials })=>{
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon:<BsFacebook/>,link:socials[0]},
                {icon:<AiFillTwitterCircle/>,link:socials[1]},
                {icon:<AiFillLinkedin/>,link:socials[2]},
                {icon:<AiTwotoneMail/>,link:socials[3]}
              ]
            }/>
            

          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers