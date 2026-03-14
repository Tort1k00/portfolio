import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Container } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Navbar color="dark" dark sticky="top" expand="md">
      <NavbarBrand className='ms-5' href="/">
        <h1 className="h5 m-0">Anton Panasiuk</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <i className='fa fa-info fa-lg' /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/myProjects'>
              <i class="fa fa-briefcase fa-lg" /> My Projects
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
