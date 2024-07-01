import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './components/navigations/BottomNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
