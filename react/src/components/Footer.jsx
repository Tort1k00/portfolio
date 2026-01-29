import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="justify-content-center text-center">

          <Col xs="12" sm="3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </Col>

          <Col xs="12" sm="3">
            <h5>Social</h5>
            <div className="d-flex justify-content-center gap-2">
              <a
                className="btn btn-social-icon btn-instagram"
                href="https://www.instagram.com/anton.panasiuk/?hl=en"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="btn btn-social-icon btn-github"
                href="https://github.com/Tort1k00"
              >
                <i className="fa fa-github" />
              </a>
            </div>
          </Col>

          <Col xs="12" sm="3">
            <h5>Contact</h5>
            <a
              role="button"
              className="btn btn-link d-block"
              href="tel:+19169579123"
            >
              <i className="fa fa-phone" /> 1-916-957-9123
            </a>
            <a
              role="button"
              className="btn btn-link d-block"
              href="mailto:panasiykanton@gmail.com"
            >
              <i className="fa fa-envelope-o" /> panasiykanton@gmail.com
            </a>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer