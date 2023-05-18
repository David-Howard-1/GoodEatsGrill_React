import { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ReservationForm from '../features/user/ReservationForm';
import logo from '../assets/img/goodeats_logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color="success" sticky="top" expand="md" className="mb-2">
            <NavbarBrand className='navbar-brand' href="/">
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="Good Eats Logo" width='20%' className='float-start' />
                    <h1>Good Eats Grill</h1>
                </div>
            </NavbarBrand>

            <NavbarToggler className='ms-auto' onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'>
                            <i className='fa fa-cutlery fa-lg' /> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <ReservationForm />
            </Collapse>
        </Navbar>
    )
}

export default Header;