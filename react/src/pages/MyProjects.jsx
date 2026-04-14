import CarouselComponent from "../components/Carousel"

const MyProjects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-lg-10 mx-auto">
          <div className="hero-title mt-5 mb-4" >
            <h2>Full-Stack Campground Management App</h2>
          </div>
          <p>Full-stack web application allowing users to browse campsites, create accounts, submit reviews, and manage reservations through a responsive React interface backed by a RESTful Node.js API:</p>
        </div>
      </div>
      <CarouselComponent />
    </div>
  )
}

export default MyProjects
