import { Container, Row, Col } from'reactstrap';

const Footer = () => {
    return (
        <footer className="site-footer border-top">
            <Container>
                <Row>
                    <Col xs='12' sm='6' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                    </Col>
                    <Col className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+1234567890'
                        >
                            <i className='fa fa-phone' /> 123-456-7890
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> info@goodeatsgrill.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;