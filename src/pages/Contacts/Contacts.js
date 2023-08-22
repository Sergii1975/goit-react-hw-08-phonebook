import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import Loader from '../../components/Loader/Loader';
import {
  AddUserIcon,
  Button,
  ContactNavWrapper,
  ContentPageContainer,
  FilterWrapper,
  Title,
} from './Contacts.styled';


const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <ContentPageContainer>
      <Section>
        <ContactNavWrapper>
          <Title>Contacts</Title>
          <FilterWrapper>
            <Filter />
            <Button type="button" onClick={handleOpenModal}>
              <AddUserIcon />
              New Contact
            </Button>
          </FilterWrapper>
        </ContactNavWrapper>
              {isLoading && !error && <b>Request in progress</b>}
              {isLoading && <Loader/>}
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Modal
          children={
            <Section title="Add New Contact">
              <ContactForm onCloseModal={handleOpenModal} />
            </Section>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </ContentPageContainer>
  );
};

export default Contacts;