export const validateReservationForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 6) {
        errors.name = 'Must be at least 6 characters';
    } else if (values.name.length > 20) {
        errors.name = 'Must be no more than 20 characters';
    };

    if (!values.date) {
        errors.date = 'Required';
    }

    if (!values.time || values.time === 'Select...') {
        errors.time = 'Required';
    }

    return errors;
}