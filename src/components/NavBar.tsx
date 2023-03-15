import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link href='/'>
          <Navbar.Brand>Recipe Finder</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto gap-2'>
            <Link href='/'>Home</Link>
            <Link href='/favorite'>Favorites</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
