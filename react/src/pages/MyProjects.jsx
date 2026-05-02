import CarouselComponent from "../components/Carousel"
import { motion } from "framer-motion"
import campgroundScreenshot from "../assets/images/Nucamp-mobile-screenshot.png"
import campgroundVideo from "../assets/video/Nucamp-mobile-recording.mp4"

const MyProjects = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-10 mx-auto">
          <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5, marginBottom: "0.75rem" }}>
            Portfolio — Selected work
          </p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, marginBottom: "1rem" }}>
            My{" "}
            <span style={{ borderBottom: "3px solid #06b6d4", paddingBottom: "2px" }}>Projects</span>
          </h1>
          <p style={{ maxWidth: "480px", opacity: 0.6, lineHeight: 1.7, fontSize: "15px", fontWeight: 300 }}>
            A collection of full-stack applications built with modern tools — from RESTful APIs to cross-platform mobile experiences.
          </p>
        </div>
      </div>
      
      <div className="row">
        <CarouselComponent/>
      </div>
      <div className="row">
        <div className="col-4 d-flex justify-content-center mx-auto mt-5 col-sm-6">
          <motion.div className="me-5" style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a style={{ backgroundColor: '#06b6d4' }} className="btn w-100" href="https://react-deploy-test-485200.web.app/" target="_blank">
              Experience the Project</a>
          </motion.div>  
          <motion.div style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={{ borderColor: 'white' }} className="btn btn-dark w-100" target="_blank" href="https://github.com/Tort1k00/nucampsite-react">View Code</a>
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
           <figure className="text-center">
            <img
              width={300}
              src={campgroundScreenshot}
              alt="Nucamp mobile app screenshot"
              style={{ borderRadius: "12px" }}
            />
            <figcaption style={{ fontSize: "12px", opacity: 0.45, marginTop: "0.5rem" }}>Screenshot</figcaption>
          </figure>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <figure className="text-center">
            <video
              width={300}
              autoPlay
              muted
              loop
              playsInline
              src={campgroundVideo}
              style={{ borderRadius: "12px" }}
            />
            <figcaption style={{ fontSize: "12px", opacity: 0.45, marginTop: "0.5rem" }}>Demo recording</figcaption>
          </figure>
        </div>
      </div>
      
      <div className="row">
        <div className="col d-flex justify-content-center mx-auto mt-3 col-sm-6">
          <motion.div 
            style={{ width: '200px' }} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
          >
            <a 
              style={{ borderColor: 'white' }} 
              className="btn btn-dark w-100" 
              target="_blank" 
              href="https://github.com/Tort1k00/nucampsite"
            >
              View Code
            </a>
          </motion.div>
        </div>
      </div>


    </div>
  )
}

export default MyProjects
