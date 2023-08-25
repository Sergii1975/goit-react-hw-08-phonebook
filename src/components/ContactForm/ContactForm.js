import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Form, Input, Label, Text, Button, AddUserIcon } from './ContactForm.styled';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';


export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    
    if (contacts.some(({ name }) => name.toLowerCase().trim() === formName.toLowerCase().trim() || name.trim() === formName.trim())) {
      return Notify.warning(`Alert, ${formName} is already in contacts`);
    }

    if (contacts.some(({ number }) => number === formNumber.trim())) {
      return Notify.warning(`Alert, ${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
       Notify.failure("Sorry, something's wrong");
      });

    onCloseModal();
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name ..."
          value={contacts.name}
        />
      </Label>
      <Label>
       <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number ..."
          value={contacts.number}
        />
      </Label>
      <Button type="submit">
        <AddUserIcon />
        New contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};