import { Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export const NavBarTop = () => {
    return (
        <Navbar className="bg-dark shadow-sm mb-3 mx-10 text-white">
            <Container >
                <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                <Nav.Link to="/Form" as={NavLink} >Make Request</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NavBarTop