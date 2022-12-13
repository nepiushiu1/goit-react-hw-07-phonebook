import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import { filtersReducer } from './filtersSlice';

// import storage from 'redux-persist/lib/storage';

import {
  //   persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReduser,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// export const persistor = persistStore(store);
// ========================================
