import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const MenuItemCard = ({ menuItem }) => {
    const { name, ingredients } = menuItem;

    return (
        <Card className='menu-item-card m-2' >
            <CardBody>
                <CardTitle tag='h3'>{name}</CardTitle>
                <CardText>{ingredients}</CardText>
            </CardBody>
        </Card>
    )
}

export default MenuItemCard;