import { motion } from "framer-motion"
 
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})
 
const HomePage = () => {
  return (
    <div className="py-5 mt-4 d-flex flex-column align-items-center text-center">

      <div style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
 
      <motion.p
        {...fadeUp(0)}
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          opacity: 0.5,
          marginBottom: "1.5rem",
        }}
      >
        Portfolio — Full Stack Developer
      </motion.p>
 
      <motion.h1 {...fadeUp(0.1)} className="display-5 fw-bold mb-3 hero-title">
        Hi, I'm Anton Panasiuk
      </motion.h1>
 
      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontFamily: "monospace",
          fontSize: "12px",
          color: "#06b6d4",
          letterSpacing: "0.1em",
          marginBottom: "2rem",
        }}
      >
        JavaScript · React · React Native · Node.js
      </motion.p>
 
      <hr className="opacity-25 col-md-8 col-8" />
 
      <motion.div {...fadeUp(0.35)} className="lead col-md-6 px-5 my-5">
        I'm a developer focused on building responsive and user-friendly web and mobile applications.
        I work with JavaScript and React, and I enjoy turning ideas into clean, functional interfaces.
        My goal is to grow more in web development and build products that solve real problems.
      </motion.div>
 
      <hr className="opacity-25 col-md-8 col-8" />
 
    </div>
  )
}
 
export default HomePage