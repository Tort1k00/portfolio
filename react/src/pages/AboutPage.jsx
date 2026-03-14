

const AboutPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="display-5 fw-bold mb-3 hero-title py-5 mt-4 ">
        About Me
      </h1>
      <div className="row align-items-center g-4 mb-5">
        <div className="col-8 col-lg-8 mx-auto">
          <img
            src="../../src/assets/my-picture.png"
            alt="Anton Panasiuk"
            className="about-portrait"
            width={260}
            height={260}
          />
          <div className="hero-title-smaller fw-bold mb-1">My Journey</div>
          <p className="mb-0">
            I was born in Ukraine and moved to the United States when I was 17 years old. Relocating to a new country at that age taught me resilience, adaptability, and the importance of pushing beyond my comfort zone — qualities that now shape the way I approach both life and software development.
          </p>
        </div>
      </div>
      <div className="row mb-5 text-end">
        <div className="col-8 mx-auto">
          <div className="hero-title-smaller fw-bold mb-1">Early Interest in Technology</div>
          My interest in programming began in middle school. I was always curious about how websites and applications worked behind the scenes. What started as simple curiosity gradually turned into a serious ambition. Over time, I realized that I didn’t just want to use technology — I wanted to build it.
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-8 mx-auto">
          <div className="hero-title-smaller fw-bold mb-1">Professional Training – Nucamp Bootcamp</div>
          After graduating, I made a clear decision to pursue development professionally and enrolled in the Nucamp coding bootcamp. At Nucamp, I found something I did not expect — exceptional instructors who were not only highly qualified but deeply invested in their students’ success. Complex topics were broken down with clarity and precision, and I was genuinely surprised at how naturally I absorbed the material. The program was intensive and fast-paced, yet it was structured in such an elegant and logical way that the six months of study felt like a single focused moment of growth.
        </div>
      </div>
      <div className="row mb-5 text-end">
        <div className="col-8 mx-auto">
          <div className="hero-title-smaller fw-bold mb-1">Technical Foundation</div>
          During the bootcamp, I strengthened my foundation in HTML, CSS, and JavaScript, and developed a deeper understanding of modern frontend development with React. I learned how to structure components effectively, manage state, work with APIs, and build responsive user interfaces. Beyond the technical skills, I developed a disciplined workflow, improved my problem-solving abilities, and learned how to approach projects systematically.
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-8 mx-auto">
          <div className="hero-title-smaller fw-bold mb-1">What Drives Me</div>
          What motivates me most about development is the ability to turn ideas into real, interactive products. I really enjoy the process of analyzing problems, designing clean solutions, and refining details until everything works smoothly. I am continuously focused on improving my code quality, expanding my knowledge, and building projects that challenge me to grow.
        </div>
      </div>
      <div className="row mb-5 text-end">
        <div className="col-8 mx-auto">
          <div className="hero-title-smaller fw-bold mb-1">Looking Ahead</div>
          My long-term goal is to evolve into a more experienced full-stack developer and contribute to products that create meaningful impact. I believe that growth comes from consistent effort, curiosity, and the willingness to keep learning — and I approach every new challenge with that mindset.
        </div>
      </div>
    </div >
  )
}

export default AboutPage
