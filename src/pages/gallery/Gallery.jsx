import './Gallery.css'
import Main_Header from '../../conponents/Main_Header'
import header_image from '../../images/header_bg_3.jpg'


const Gallery = () => {
  const gallerylength = 15;
  const images = []
  for(let i = 1 ; i <= gallerylength ; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
    <Main_Header title="Our Gallery" image={header_image} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum! "/>

    <section className='gallery'>
      <div className="container gallery_container">
      {
        images.map((image,index)=>{
          
          return (
            <article key={index} className="">
              <img src={image} alt="" />
            </article>
          )
        })
      }

      </div>
    </section>

    </>
  )
}

export default Gallery