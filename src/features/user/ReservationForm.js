import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReservation, selectReserved } from './reserverationSlice';
import { validateReservationForm } from './validateReservationForm';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button,
    Col
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import checkMark from '../../assets/img/checkmark.png';

const ReservationForm = () => {
    const [ reservationModalOpen, setReservationModalOpen ] = useState(false);

    const isReserved = useSelector(selectReserved);
    
    const dispatch = useDispatch();

    const handleReservation = (values) => {
        const isReserved = {
            id: Date.now(),
            confirmImg: checkMark,
            name: values.name,
            date: values.date,
            time: values.time
        };
        dispatch(setReservation(isReserved));
        setReservationModalOpen(false);
        console.log(isReserved);
    }

    return (
        <>
            <span className='navbar-text ml-auto'>
                {isReserved ? (
                    <div style={{ width: '3rem', height: '3rem' }}>
                        <img
                            src={isReserved.confirmImg}
                            alt={'Reservation Check'}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <Button
                        onClick={() => setReservationModalOpen(true)}
                        className='reservation-button'
                    >
                        <i className='fa fa-calendar-check-o fa-lg' /> Make a Reservation
                    </Button>
                )}
                <Modal isOpen={reservationModalOpen}>
                    <ModalHeader toggle={() => setReservationModalOpen(false)}>
                        Make a Reservation
                    </ModalHeader>
                    <ModalBody>
                        <Formik
                            initialValues={{ name: '', date: '', time: '' }}
                            onSubmit={handleReservation}
                            validate={validateReservationForm}
                        >
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='name'>
                                        Your Name
                                    </Label>
                                    <Field 
                                        id='name'
                                        name='name'
                                        placeholder='Your Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='name'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='date'>
                                        Select a Date
                                    </Label>
                                    <Field 
                                        id='date'
                                        name='date'
                                        type='date'
                                        placeholder='Select a Date'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='date'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md='3' className='mt-2 mr-auto'>
                                        <Label htmlFor='time'>
                                            Select a Time
                                        </Label>
                                    </Col>
                                    <Col md='3'>
                                        <Field 
                                            id='time'
                                            name='time'
                                            as='select'
                                            className='form-control'
                                        >
                                            <option>Select...</option>
                                            <option>5:00 PM</option>
                                            <option>5:30 PM</option>
                                            <option>6:00 PM</option>
                                            <option>6:30 PM</option>
                                            <option>7:00 PM</option>
                                            <option>7:30 PM</option>
                                        </Field>  
                                    </Col>
                                    <ErrorMessage name='time'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' className='reservation-button'>
                                    Reserve
                                </Button>
                            </Form>
                        </Formik>
                    </ModalBody>
                </Modal>
            </span>
        </>
    )
}

export default ReservationForm;