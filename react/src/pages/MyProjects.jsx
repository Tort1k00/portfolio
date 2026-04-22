import CarouselComponent from "../components/Carousel"
import { motion } from "framer-motion"

const MyProjects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10  mx-auto">
          <div className="hero-title mt-5 mb-4" >
            <h2>Full-Stack Campground Management App</h2>
          </div>
          <p className="mb-5">Full-stack web application allowing users to browse campsites, create accounts, submit reviews, and manage reservations through a responsive React interface backed by a RESTful Node.js API:</p>
          <CarouselComponent/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex justify-content-center mx-auto mt-5 col-sm-6">
          <motion.div className="me-5" style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a style={{ backgroundColor: '#06b6d4' }} className="btn w-100" href="https://react-deploy-test-485200.web.app/" target="_blank">
              Experience the Project</a>
          </motion.div>  
          <motion.div style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={{ borderColor: 'white' }} className="btn btn-dark w-100" target="_blank" href="https://github.com/Tort1k00/portfolio">View Code</a>
          </motion.div>
        </div>
      </div>


      <hr className="opacity-25 my-5 col-md-10 col-8 mx-auto" />

      <div className="row">
        <div className="col-10 col-lg-10 mx-auto">
          <div className="hero-title mt-5 mb-4" >
            <h2>Full-Stack Campground Management App (<span style={{ color: 'white' }}>Mobile Version</span>)</h2>
          </div>
        </div>
      </div>
      <div className="row my-5 d-flex justify-content-center">
        <div className="col-4 d-flex justify-content-center">
           <img width={'300'} src="/src/assets/images/Nucamp-mobile-screenshot.png" alt="Nucamp mobile screenshot" />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <video width={'300'} autoPlay muted loop src="/src/assets/video/Nucamp-mobile-recording.mp4" />
        </div>
      </div>

    </div>
  )
}

export default MyProjects
