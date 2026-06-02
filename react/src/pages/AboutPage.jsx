import { motion } from "framer-motion"

const SectionNumber = ({ num, type }) => (
  <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#06b6d4", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
    {num} / {type}
  </p>
)

const sections = [
  {
    num: "01",
    type: "Background",
    title: "My Journey",
    body: "I was born in Ukraine and moved to the United States when I was 17 years old. Relocating to a new country at that age taught me resilience, adaptability, and the importance of pushing beyond my comfort zone — qualities that now shape the way I approach both life and software development.",
  },
  {
    num: "02",
    type: "Origins",
    title: "Early Interest in Technology",
    body: "My interest in programming began in middle school. I was always curious about how websites and applications worked behind the scenes. What started as simple curiosity gradually turned into a serious ambition. Over time, I realized that I didn't just want to use technology — I wanted to build it.",
  },
  {
    num: "03",
    type: "Education",
    title: "Professional Training – Nucamp Bootcamp",
    body: "After graduating, I made a clear decision to pursue development professionally and enrolled in the Nucamp coding bootcamp. At Nucamp, I found something I did not expect — exceptional instructors who were not only highly qualified but deeply invested in their students' success. The program was intensive and fast-paced, yet structured in such an elegant and logical way that the six months of study felt like a single focused moment of growth.",
  },
  {
    num: "04",
    type: "Skills",
    title: "Technical Foundation",
    body: "During the bootcamp, I strengthened my foundation in HTML, CSS, and JavaScript, and developed a deeper understanding of modern frontend development with React. I learned how to structure components effectively, manage state, work with APIs, and build responsive user interfaces. Beyond the technical skills, I developed a disciplined workflow, improved my problem-solving abilities, and learned how to approach projects systematically.",
  },
  {
    num: "05",
    type: "Motivation",
    title: "What Drives Me",
    body: "What motivates me most about development is the ability to turn ideas into real, interactive products. I really enjoy the process of analyzing problems, designing clean solutions, and refining details until everything works smoothly. I am continuously focused on improving my code quality, expanding my knowledge, and building projects that challenge me to grow.",
  },
  {
    num: "06",
    type: "Goals",
    title: "Looking Ahead",
    body: "My long-term goal is to evolve into a more experienced full-stack developer and contribute to products that create meaningful impact. I believe that growth comes from consistent effort, curiosity, and the willingness to keep learning — and I approach every new challenge with that mindset.",
  },
]

const AboutPage = () => {
  return (
    
    
    <div className="container py-5">

      <div style={{
        position: "fixed",
        top: "40%",
        left: "25%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6, 181, 212, 0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* ── Header ── */}
      <div className="row">
        <div className="col-10 mx-auto">
          <p style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
            Portfolio — Personal
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 mx-auto display-5 fw-bold">
          <span className="hero-title" style={{ display: "inline-block", width: "fit-content", borderBottom: "1px solid white", paddingBottom: "2px" }}>
            About Me
          </span>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-10 mx-auto">
          <p style={{ maxWidth: "480px", opacity: 0.6, lineHeight: 1.7, fontSize: "15px", fontWeight: 300 }}>
            A developer shaped by two worlds — born in Ukraine, built in the United States. Here's the story behind the code.
          </p>
        </div>
      </div>

      {/* ── Section 01 — Portrait + Journey ── */}
      <div className="row mb-5">
        <div className="col-10 mx-auto">
          <div className="d-flex gap-5 align-items-start flex-wrap">
            <div style={{ flexShrink: 0 }}>
              <img
                src="../../src/assets/images/my-picture.png"
                alt="Portrait"
                width={220}
                height={220}
                style={{ borderRadius: "12px", objectFit: "cover", display: "block", filter: "grayscale(15%) contrast(1.05)" }}
              />
              <p style={{ fontFamily: "monospace", fontSize: "11px", opacity: 0.35, marginTop: "0.5rem", textAlign: "center" }}>
                Ukraine → United States
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <SectionNumber num="01" type="Background" />
              <h2 className="hero-title-smaller mb-3">My Journey</h2>
              <div style={{ borderLeft: "2px solid #06b6d4", paddingLeft: "1rem", opacity: 0.75, fontSize: "14px", lineHeight: 1.7 }}>
                {sections[0].body}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="opacity-25 my-5 col-md-10 col-8 mx-auto" />

      {/* ── Sections 02–06 ── */}
      {sections.slice(1).map((s, i) => (
        <div key={s.num}>
          <motion.div
            className="row mb-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="col-10 mx-auto">
              <SectionNumber num={s.num} type={s.type} />
              <h2 className="hero-title-smaller mb-3">{s.title}</h2>
              <div style={{ borderLeft: "2px solid #06b6d4", paddingLeft: "1rem", opacity: 0.75, fontSize: "14px", lineHeight: 1.7, maxWidth: "680px" }}>
                {s.body}
              </div>
            </div>
          </motion.div>
          {i < sections.slice(1).length - 1 && (
            <hr className="opacity-25 my-5 col-md-10 col-8 mx-auto" />
          )}
        </div>
      ))}

    </div>
  )
}

export default AboutPage
