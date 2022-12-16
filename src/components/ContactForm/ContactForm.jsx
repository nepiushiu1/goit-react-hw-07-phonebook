import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        phone: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form} id="form">
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
};
export default ContactForm;
