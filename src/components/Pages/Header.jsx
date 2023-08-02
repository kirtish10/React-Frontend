import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Online Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/login'>
                  <Button className='mx-3 my-3' variant='warning'><Nav.Link>
                    <FaSignInAlt /> Sign In
                  </Nav.Link></Button>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Button className='mx-3 my-3' variant='secondary'><Nav.Link>
                    <FaSignOutAlt /> Sign Up
                  </Nav.Link></Button>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;