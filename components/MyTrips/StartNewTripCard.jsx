import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Ionicons name="location-sharp" size={30} color={'#000'} />
      <Text style={{ fontFamily: 'NotoMedium', fontSize: 22 }}>
        No trips planned yet
      </Text>
      <Text
        style={{
          fontFamily: 'NotoMedium',
          fontSize: 14,
          textAlign: 'center',
          color: Colors.GRAY,
        }}
      >
        Looks like you haven't planned any trips yet. Start planning now!
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/create-trip/search-place')}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: 'NotoMedium',
            fontSize: 16,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
