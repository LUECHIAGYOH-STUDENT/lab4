import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Read', to: '/read' },
  { label: 'Create', to: '/create' },
]

export default function NavigationBar() {
  return (
    <Navbar expand="md" variant="dark" bg="primary" className="lab-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" end className="fw-semibold">
          Lab 4
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="lab-navigation" aria-label="Toggle navigation" />
        <Navbar.Collapse id="lab-navigation">
          <Nav className="ms-auto">
            {links.map(({ label, to }) => (
              <Nav.Link key={to} as={NavLink} to={to} end={to === '/'}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
