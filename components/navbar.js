import React from 'react'
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import { BiMenuAltRight } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';




const Navb = () => {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand='lg' fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">Occas Immoblier</Navbar.Brand>
        <Navbar.Toggle>
          <BiMenuAltRight size="1.3em" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="justify-content-start align-items-center flex-grow-1 pe-3 ms-5">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <NavDropdown title="Immoblier" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/neuf">Neuf</NavDropdown.Item >
              <NavDropdown.Item href="/usagé">Usagé</NavDropdown.Item>
              <NavDropdown.Item href="/tout">Tout</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="#Estimation">Estimation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>   
          <Nav>
          <Link href="/ajouter-une-annonce" passHref><Nav.Link className="btn btn-outline-info"><BsPlusCircle /> Déposer une Annonce</Nav.Link></Link>
          <Link href="/inscription" passHref><Nav.Link>Se Connecter</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
    </>
  )
}

export default Navb;