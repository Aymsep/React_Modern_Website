import './Plans.css'
import Main_Header from '../../conponents/Main_Header'
import Card from '../../UI/Card'
import { plans } from '../../data'
import image from '../../images/header_bg_4.jpg'


const Plans = () => {
  return (
    <>
    <Main_Header title="Membership Plans" image={image} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum!"/>
    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features })=>{
            return(
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h2>Features</h2>
                {
                  features.map(({feature, availability},index)=>{
                    return (
                      <p key={index} className={!availability? 'feature_false':''}>{feature}</p>
                    )
                  })
                }
                <button className="btn lg">Choose Plan</button>
              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans