import { Carousel } from "react-bootstrap"

const items = [
  {
    src: "/src/assets/images/Nucamp-Home-Screenshot.png",
    altText: "Nucamp home page"
  },
  {
    src: "/src/assets/images/Nucamp-Directory-Screenshot.png",
    altText: "Nucamp campground directory"
  },
  {
    src: "/src/assets/images/Nucamp-About-Screenshot.png",
    altText: "About Nucamp"
  },
  {
    src: "/src/assets/images/Nucamp-Favorites-Screenshot.png",
    altText: "Favorites view"
  }
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