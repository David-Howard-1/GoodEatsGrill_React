import { Container, Row, Col } from 'reactstrap';
import MenuItemsList from '../features/menu/MenuItemsList';

const Menu = () => {

    return (
        <Container>
            <h1 className='text-center border-top p-4 mt-4'>THE MENU</h1>
            <MenuItemsList />
        </Container>
    )
}

export default Menu;