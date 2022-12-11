import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filterContacts(contacts, filter);

  const deleteNewContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ol className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css.link}>
          {name} : {number}
          <button
            type="button"
            onClick={() => dispatch(deleteNewContact(id))}
            className={css.btn}
          >
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};
export default ContactList;
