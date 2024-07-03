import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  useFonts({
    Noto: require('../assets/fonts/NotoSansKR-Regular.ttf'),
    NotoLight: require('../assets/fonts/NotoSansKR-Light.ttf'),
    NotoMedium: require('../assets/fonts/NotoSansKR-Medium.ttf'),
    NotoBold: require('../assets/fonts/NotoSansKR-Bold.ttf'),
    NotoBlack: require('../assets/fonts/NotoSansKR-Black.ttf'),
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
