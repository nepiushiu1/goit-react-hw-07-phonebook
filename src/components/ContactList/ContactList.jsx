import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

// const filterContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const deleteNewContact = contactId => dispatch(deleteContact(contactId));
  console.log(visibleContacts);
  return (
    <ol className={css.list}>
      {visibleContacts.map(({ name, phone, id }) => (
        <li key={id} className={css.link}>
          {name} : {phone}
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
