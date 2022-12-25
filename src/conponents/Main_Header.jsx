
const Main_Header = ({image, title, description}) => {
  return (
    <header className="Header">
        <div className="Header_container">
            <div className="Header_container_bg">
                <img src={image} alt="" />
            </div>
            <div className="Header_content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        
    </header>
  )
}

export default Main_Header