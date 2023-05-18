import burger from '../../assets/img/gourmet-burger.jpg';
import salmon from '../../assets/img/salmon.jpg';
import chickenSandwich from '../../assets/img/hotchickensand.jpg';
import shrimp from '../../assets/img/shrimp.jpg'
import bangers from '../../assets/img/bangers.jpg';
import { Row, Col } from 'reactstrap';

const MenuImgs = () => {
    return (
        <Row>
            <Col>
                <img src={burger} className='menu-img' alt='Good Eats Burger' />
            </Col>
            <Col> 
                <img src={chickenSandwich} className='menu-img' alt='Hot Chicken Sandwich' />
            </Col>
            <Col>
                <img src={shrimp} className='menu-img' alt='Chile-Garlic Shrimp' />
            </Col>
            <Col className='d-none d-md-block'>
                <img src={bangers} className='menu-img' alt='Bangers and Mash' />
            </Col>
            <Col className='d-none d-lg-block'>
                <img src={salmon} className='menu-img' alt='Salmon and Citrus' />
            </Col>
        </Row>
    )
}

export default MenuImgs;