import { Container } from 'reactstrap';
import MenuItemsList from '../features/menu/MenuItemsList';
import MenuImgs from '../features/menu/MenuImgs';

const Menu = () => {

    return (
        <Container>
            <h1 className='text-center border-top border-bottom p-4 mt-4'>THE MENU</h1>
            <MenuImgs />
            <MenuItemsList />
        </Container>
    )
}

export default Menu;