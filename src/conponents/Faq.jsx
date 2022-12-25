import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'

const Faq = ({question, answer}) => {
    const [isanswershowing,setisanswershowing] = useState(false)
  return (
    <article className='faq' 
    onClick={()=> setisanswershowing(!isanswershowing)}
    >
        <div>
        <h4>{question}</h4>
        <button className='faq_icon'>
            {isanswershowing? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
        </div>
        {isanswershowing && <p>{answer}</p>}
    </article>
  )
}

export default Faq