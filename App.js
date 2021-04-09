import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppStack from './src/navigation/AppStack';
import {Root} from 'native-base';
const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <AppStack />
      </Root>
    </Provider>
  );
};

export default App;
