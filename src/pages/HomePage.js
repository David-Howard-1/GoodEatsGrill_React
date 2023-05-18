import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    CardTitle, 
    CardText, 
    CardImg, 
    CardImgOverlay 
} from 'reactstrap';
import vibes from '../assets/img/tableoffood_cropped.jpg';
import staff from '../assets/img/chef1.jpg';
import veggies from '../assets/img/vegbasket.jpeg';


const HomePage = () => {
    return (
        <Container fluid>
            <Row >
                <Col md='12'>
                    <Card className='m-1 text-white'>
                        <CardImg src={vibes} alt='Table of Food' />
                        <CardImgOverlay className='text-center'>
                            <div className='home-page-center-text p-4'>
                                <CardTitle tag='h1'>Welcome</CardTitle>
                                <CardText tag='h3'>Quality Ingredients and Quality Time</CardText>
                            </div>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col sm='6'>
                    <Card className='m-1'>
                        <CardImg top src={staff} alt='Chef'  />
                        <CardBody>
                            <CardTitle tag='h2'>Commitment</CardTitle>
                            <CardText>To offer the best food takes commitment and drive to excellence</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='6'>
                    <Card className='m-1'>
                        <CardImg top src={veggies} alt='Basket of Veggies' />
                        <CardBody>
                            <CardTitle tag='h2'>Quality</CardTitle>
                            <CardText>All of our ingredients are locally and ethically sourced</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;