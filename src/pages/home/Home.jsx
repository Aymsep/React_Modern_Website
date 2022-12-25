import './Home.css'
import Header from '../../conponents/Header'
import Programs from '../../conponents/Programs'
import Values from '../../conponents/Values'
import Faqs from '../../conponents/Faqs'
import Testimonials from '../../conponents/Testimonials'
import Footer from '../../conponents/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
    </div>
  )
}

export default Home