import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require('../assets/images/login.png')}
        style={{ width: '100%', height: 520 }}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'NotoBold',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: 'Noto',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover your next adventure at your fingertips. Plan your trip with
          AI.
        </Text>
        <TouchableOpacity
          onPress={() => router.push('auth/sign-in')}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontFamily: 'Noto',
              fontSize: 15,
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 20,
  },
});
