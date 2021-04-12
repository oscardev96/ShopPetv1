import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import AppStack from './src/navigation/AppStack';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from 'native-base';
const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <PersistGate loading={null} persistor={persistor}>
          <AppStack />
        </PersistGate>
      </Root>
    </Provider>
  );
};

export default App;
