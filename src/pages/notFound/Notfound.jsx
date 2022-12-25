import './Notfound.css'
import Main_Header from '../../conponents/Main_Header'
import image from '../../images/header_bg_1.jpg'
import { Link } from 'react-router-dom'


const Notfound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default Notfound