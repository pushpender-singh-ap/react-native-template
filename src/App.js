import React from 'react';

import { LogBox } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import axios from 'axios';
import { Provider } from 'react-redux';

import AppStacks from '@/routes/AppStacks';
import { Host } from '@/utils/Axios/Host';
import { store } from '@/redux/store/store';

axios.defaults.baseURL = Host;
LogBox.ignoreAllLogs();

export function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppStacks />
      </PaperProvider>
    </Provider>
  );
};