import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Notfound from './pages/notFound/Notfound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Navbar from './conponents/Navbar'
import Footer from './conponents/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Plans' element={<Plans/>}/>
        <Route path='Trainers' element={<Trainers/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App