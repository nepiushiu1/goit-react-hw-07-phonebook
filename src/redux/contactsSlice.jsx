// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlise = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = contactsSlise.actions;
// export const contactsReducer = contactsSlise.reducer;

// export const getContacts = state => state.contacts.contacts;
// export const getFilter = state => state.contacts.filter;

// ==========================================================================

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterMyContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items.unshift(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

    // addMyContact(state, action) {
    //   state.contacts.items.unshift(action.payload);
    // },
    // deleteMyContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
});

export const { filterMyContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
