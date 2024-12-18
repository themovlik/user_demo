import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import Router from './src/navigation/router';
import store from './src/utils/redux/store';


const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
