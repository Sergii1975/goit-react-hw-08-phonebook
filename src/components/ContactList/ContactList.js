import { useSelector } from 'react-redux';
import { selectVisibleContacts }  from 'redux/contacts/selectors';
import { ContactsListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {contacts.map(({ name, phone, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};