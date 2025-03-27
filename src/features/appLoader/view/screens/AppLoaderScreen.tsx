import React from 'react';

import {onAppLoader} from '../../slice/AppLoaderSlice';
import StaticAppLoader from './StaticAppLoader';
import {useSelector} from 'react-redux';

function AppLoader() {
  const isLoaderShown = useSelector(onAppLoader).appLoader;

  return <>{isLoaderShown && <StaticAppLoader />}</>;
}

export default AppLoader;
