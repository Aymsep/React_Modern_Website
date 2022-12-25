import {FaCrown} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Section_head from './Section_head'
import Card from '../UI/Card'
import { programs } from '../data'
import { Link} from 'react-router-dom'



const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs_container">
            <div className="programs_head">
                <Section_head icon={<FaCrown/>}
                title="Programs"
                />
            </div>
            <div className="programs_wrapper">
                {
                    programs.map(({id, icon, title, info, path})=>{
                        return (
                            <Card className="programs_program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">
                                    Learn More
                                    <AiOutlineArrowRight/>
                                </Link>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
        
    </section>
  )
}

export default Programs