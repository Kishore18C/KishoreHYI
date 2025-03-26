import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import FormScreen from './src/features/users/screens/FormScreen';
import NavigationHandler from './src/navigation/navigationHandler';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationHandler />
    </Provider>
  );
}

export default App;
