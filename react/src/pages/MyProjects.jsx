import CarouselComponent from "../components/Carousel"
import { motion } from "framer-motion"
import campgroundScreenshot from "../assets/images/Nucamp-mobile-screenshot.png"
import campgroundVideo from "../assets/video/Nucamp-mobile-recording.mp4"

const techBadge = (label) => (
  <span
    key={label}
    style={{
      fontFamily: "monospace",
      fontSize: "11px",
      padding: "3px 10px",
      borderRadius: "20px",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "rgba(255,255,255,0.55)",
      background: "rgba(255,255,255,0.05)",
    }}
  >
    {label}
  </span>
)

const SectionNumber = ({ num, type }) => (
  <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#06b6d4", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
    {num} / {type}
  </p>
)

const MyProjects = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
            Portfolio — Selected work
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 mx-auto display-5 fw-bold">
          <span className="hero-title" style={{ display: 'inline-block', width: 'fit-content', borderBottom: "1px solid white", paddingBottom: "2px" }}>
            My Projects
          </span>
        </div>
      </div>
        <div className="row mb-5">
          <div className="col-10 mx-auto">
             <p style={{ maxWidth: "480px", opacity: 0.6, lineHeight: 1.7, fontSize: "15px", fontWeight: 300 }}>
            A collection of full-stack applications built with modern tools — from RESTful APIs to cross-platform mobile experiences.
          </p>
        </div>
      </div>
      
      {/* Project 1 */}
      <div className="row">
        <div className="col-10 mx-auto">
          <SectionNumber num="01" type="Web Application" />
          <h2 className="hero-title-smaller mb-3">Full-Stack Campground Management App</h2>

          <div style={{ borderLeft: "2px solid #06b6d4", paddingLeft: "1rem", marginBottom: "1.25rem", opacity: 0.75, fontSize: "14px", lineHeight: 1.7 }}>
            Users can browse campsites, create accounts, submit reviews, and manage reservations through a responsive React interface backed by a RESTful Node.js API.
          </div>

          <div className="d-flex flex-wrap gap-2 mb-5">
            {["React", "Node.js", "REST API", "MongoDB", "Firebase"].map(techBadge)}
          </div>

        <CarouselComponent/>
        
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto d-flex justify-content-center mx-auto mt-5">
          <motion.div className="me-5" style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a style={{ backgroundColor: '#06b6d4' }} className="btn w-100" href="https://react-deploy-test-485200.web.app/" target="_blank" rel="noopener noreferrer">
              Experience the Project</a>
          </motion.div>  
          <motion.div style={{ width: '200px' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={{ borderColor: 'white' }} className="btn btn-dark w-100" target="_blank" rel="noopener noreferrer" href="https://github.com/Tort1k00/nucampsite-react">View Code</a>
          </motion.div>
        </div>
      </div>


      <hr className="opacity-25 my-5 col-md-10 col-8 mx-auto" />

      {/* Project 2 */}
      <div className="row">
        <div className="col-10 mx-auto">
          <SectionNumber num="02" type="Mobile Application" />
          <h2 className="hero-title-smaller mb-3">
            Campground Management — Mobile Version
          </h2>

          <div style={{ borderLeft: "2px solid #06b6d4", paddingLeft: "1rem", marginBottom: "1.25rem", opacity: 0.75, fontSize: "14px", lineHeight: 1.7 }}>
            A native mobile port bringing campsite browsing, reviews, and reservations to iOS and Android with a touch-optimised UI.
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {["React Native", "Expo", "iOS", "Android"].map(techBadge)}
          </div>
        </div>
      </div>

      <div className="row my-4 justify-content-center">
        <div className="col-auto mx-5">
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
        <div className="col-auto mx-5">
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
        <div className="col-10 mx-auto d-flex justify-content-center mt-3">
          <motion.div 
            style={{ width: '200px' }} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
          >
            <a 
              style={{ borderColor: 'white' }} 
              className="btn btn-dark w-100" 
              target="_blank" 
              rel="noopener noreferrer"
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
