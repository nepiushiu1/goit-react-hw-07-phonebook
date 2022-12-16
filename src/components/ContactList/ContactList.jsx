import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const getFilterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getFilterContacts(contacts, filter);

  return (
    <ol className={css.list}>
      {filteredContacts.map(({ name, phone, id }) => (
        <li key={id} className={css.link}>
          {name} : {phone}
          <button
            type="button"
            onClick={() => handleDelete(id, name)}
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
