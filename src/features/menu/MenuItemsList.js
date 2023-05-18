import { useSelector } from 'react-redux';
import { selectAllMenuItems } from "./menuSlice";
import { Col, Row } from 'reactstrap';
import MenuItemCard from "./MenuItemCard";

const MenuItemsList = () => {
    const menuItems = useSelector(selectAllMenuItems);

    return (
        <Row>
            {menuItems.map((menuItem) => {
                return (
                    <Col md='6' key={menuItem.id}>
                        <MenuItemCard menuItem={menuItem} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default MenuItemsList;