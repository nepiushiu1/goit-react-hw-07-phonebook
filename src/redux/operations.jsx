// https://6397019877359127a0298964.mockapi.io/contacts/
//6397019877359127a0298964.mockapi.io/contacts/

// const BASE_URL='https://6397019877359127a0298964.mockapi.io/contacts/'

// import { createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://6397019877359127a0298964.mockapi.io/contacts/';
// export const fetchContacts = createAsyncThunk();

// () => async dispatch => {
//   try {
//     const response = await axios.get('/contacts');
//   } catch (e) {}
// };

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6397019877359127a0298964.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
