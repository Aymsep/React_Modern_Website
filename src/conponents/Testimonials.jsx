import Section_head from "./Section_head"
import Card from "../UI/Card"
import { testimonials } from "../data"
import {FaQuoteRight} from 'react-icons/fa'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useState } from "react"



const Testimonials = () => {
    const [index,setindex] = useState(0)
    const {name,quote,job,avatar} = testimonials[index]
    const previoustesti = ()=>{
        setindex(prev => prev - 1 )
        if(index <= 0){
            setindex(4)
        }
        
    }
    const nexttesti = ()=>{
        setindex(prev => prev + 1 )
        if(index >= testimonials.length - 1){
            setindex(0)
        }
    }
  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <Section_head icon={<FaQuoteRight/>} title="Testimonials" className="testimonial_head" />
            <Card className="testimonial_card">
                <div className="testimonial_avatar">
                    <img src={avatar} alt="" />
                </div>
                <p className="testi_quote">{`" ${quote} "`}</p>
                <h5 className="testi_name">{name}</h5>
                <small className="testimonial_job">{job}</small>
            </Card>
            <div className="testi_btn_container">
                <button className="testi_btn"
                onClick={previoustesti}
                ><BsFillArrowLeftCircleFill/></button>

                <button className="testi_btn"
                onClick={nexttesti}
                ><BsFillArrowRightCircleFill/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials