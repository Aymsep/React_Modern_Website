import './About.css'
import Main_Header from '../../conponents/Main_Header'
import image from '../../images/header_bg_1.jpg'
import story_image1 from '../../images/about1.jpg'
import story_image2 from '../../images/about2.jpg'
import story_image3 from '../../images/about3.jpg'

const About = () => {
  return (
    <>
    <Main_Header title="About Us" image={image} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos excepturi alias, asperiores cum! " />

    <section className="about_story">
      <div className="about_container container">
        <div className="about_section_img">
          <img src={story_image1} alt="" />
        </div>
        <div className="about_section_content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="vision_container container">

        <div className="about_section_content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
        </div>

        <div className="vision_section_img">
          <img src={story_image2} alt="" />
        </div>

      </div>
    </section>

    <section className="about_mission">
      <div className="about_container container">
        <div className="about_section_img">
          <img src={story_image3} alt="" />
        </div>
        <div className="about_section_content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at? Illum, recusandae. Asperiores fugit tenetur fugiat corporis ratione ut labore vero error non, et reprehenderit accusantium, sequi ad architecto nemo.</p>
        </div>
      </div>
    </section>


    </>
  )
}

export default About