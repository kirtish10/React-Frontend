import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Online Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/login'>
                 <Nav.Link>
                 <Button className='mx-3 my-3' variant='warning'> <FaSignInAlt /> Sign In</Button>
                   
                  </Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/register'>
                <Nav.Link>
                  <Button className='mx-3 my-3' variant='secondary'>
                    <FaSignOutAlt /> Sign Up</Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;