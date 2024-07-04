import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { CreateTripContextProvider } from '../context/CreateTripContext';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Noto: require('../assets/fonts/NotoSansKR-Regular.ttf'),
    NotoLight: require('../assets/fonts/NotoSansKR-Light.ttf'),
    NotoMedium: require('../assets/fonts/NotoSansKR-Medium.ttf'),
    NotoBold: require('../assets/fonts/NotoSansKR-Bold.ttf'),
    NotoBlack: require('../assets/fonts/NotoSansKR-Black.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <CreateTripContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </CreateTripContextProvider>
  );
}
