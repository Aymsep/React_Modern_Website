import image from '../images/values.jpg'
import Section_head from './Section_head'
import {FaCrown} from 'react-icons/fa'
import Card from '../UI/Card'
import { values } from '../data'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <img src={image} alt="" />
            </div>
            <div className="values_right">
                <Section_head icon={<FaCrown/>} title='Values' />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, natus aliquid culpa quis dolorem deleniti dolore velit eius officia necessitatibus tempore libero harum nisi eos magni quia laboriosam atque? Laboriosam.
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return (
                                <Card key={id} className="values_value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values