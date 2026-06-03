import { Carousel } from "react-bootstrap"
import nucampHome from "../assets/images/Nucamp-Home-Screenshot.png"
import nucampDirectory from "../assets/images/Nucamp-Directory-Screenshot.png"
import nucampAbout from "../assets/images/Nucamp-About-Screenshot.png"
import nucampFavorites from "../assets/images/Nucamp-Favorites-Screenshot.png"
 
const items = [
  { src: nucampHome, altText: "Nucamp home page" },
  { src: nucampDirectory, altText: "Nucamp campground directory" },
  { src: nucampAbout, altText: "About Nucamp" },
  { src: nucampFavorites, altText: "Favorites view" },
]
 
const CarouselComponent = () => {
  return (
    <div className="row row-content">
      <div className="col-8 mx-auto">
        <Carousel interval={3000} pause="hover">
          {items.map((item) => (
            <Carousel.Item key={item.src}>
              <img className="d-block w-100" src={item.src} alt={item.altText} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
 
export default CarouselComponent