import {ActivityIndicator, View} from 'react-native';

import {AppLoaderStyles as styles} from '../styles/AppLoaderStyles';

function StaticAppLoader() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    </View>
  );
}

export default StaticAppLoader;
