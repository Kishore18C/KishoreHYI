import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import NavigationHandler from './src/navigation/navigationHandler';
import AppLoader from './src/features/appLoader/view/screens/AppLoaderScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationHandler />
      <AppLoader />
    </Provider>
  );
}

export default App;
