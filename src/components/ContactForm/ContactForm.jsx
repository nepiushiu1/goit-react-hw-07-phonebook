import css from './ContactForm.module.css';

// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';

// import { getContacts } from 'redux/contactsSlice';
// import { addContact } from 'redux/contactsSlice';

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const onSubmitForm = event => {
//     event.preventDefault();
//     const name = event.currentTarget.elements.name.value;
//     const number = event.currentTarget.elements.number.value;
//     const isExist = contacts.find(contact => contact.name === name);

//     if (isExist) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     dispatch(addContact(contact));

//     document.getElementById('form').reset();
//   };
// ==================================================
// import {
//   SearchForm,
//   FormLabel,
//   FormInput,
//   FormBtn,
// } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    // const contact = {
    //   name,
    //   number,
    // };

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={css.form}
      initialValues={{ name: '', number: '' }}
      id="form"
    >
      <p className={css.name}>Name</p>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p className={css.name}>Number</p>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />{' '}
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
