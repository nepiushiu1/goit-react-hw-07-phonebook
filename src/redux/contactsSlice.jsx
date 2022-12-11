import { createSlice } from '@reduxjs/toolkit';

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
