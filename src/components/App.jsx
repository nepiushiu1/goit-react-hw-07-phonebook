import css from './App.module.css';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

// const App = () => {
//   const dispatch = useDispatch();
//   const error = useSelector(getError);
//   const isLoading = useSelector(getIsLoading);

//   useEffect(() => {
//     dispatch(getContacts());
//   }, [dispatch]);
export default function App() {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.conteiner}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </div>
  );
}
// export default App;
