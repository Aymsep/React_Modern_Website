import Section_head from "./Section_head"
import {FaQuestion} from 'react-icons/fa'
import { faqs } from "../data"
import Faq from "./Faq"

const Faqs = () => {
  return (
    <section className="faqs">
        <div className="container faqs_container">
            <Section_head icon={<FaQuestion/>} title="FAQS"/>
            <div className="faqs_wrapper">
                {
                  faqs.map(({id, ques, answ})=>{
                   return <Faq key={id} question={ques} answer={answ}/>
                  })
                }
            </div>
        </div>

    </section>
  )
}

export default Faqs