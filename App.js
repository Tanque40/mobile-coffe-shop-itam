/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
 *
 * Develop by Chilaquiles verdes team
 * Version 0.1
 * Team:
 * Lorena Mondragón
 * Bruno Vitte
 * Armando Limon
 * Erick
 *
 */

import React from 'react';
import type {Node} from 'react';

// Design framworks
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Redux settings
import sessionReducer from './reducers/SessionReducer';

// Components
import AppLayout from './src/app';

const store = createStore(sessionReducer);

const App: () => Node = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Provider store={store}>
          <AppLayout />
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
