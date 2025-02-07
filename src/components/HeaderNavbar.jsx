import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-opacity-50" style={{ borderRadius: '15px' }}>
            <Container>
                <Navbar.Brand href="/">DnD Compendium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/monsters">Monstres</Nav.Link>
                        <Nav.Link href="/classes">Classes</Nav.Link>
                        <Nav.Link href="/game-mechanics">Mécaniques de jeux</Nav.Link>
                        <NavDropdown title="Example Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.dnd5eapi.co/" target="_blank">
                                Lien Vers l'API Utilisée
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;