import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { CreateTripContextProvider } from '../context/CreateTripContext';
export default function RootLayout() {
  useFonts({
    Noto: require('../assets/fonts/NotoSansKR-Regular.ttf'),
    NotoLight: require('../assets/fonts/NotoSansKR-Light.ttf'),
    NotoMedium: require('../assets/fonts/NotoSansKR-Medium.ttf'),
    NotoBold: require('../assets/fonts/NotoSansKR-Bold.ttf'),
    NotoBlack: require('../assets/fonts/NotoSansKR-Black.ttf'),
  });

  return (
    <CreateTripContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </CreateTripContextProvider>
  );
}
