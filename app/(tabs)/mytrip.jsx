import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontFamily: 'NotoBold', fontSize: 30 }}>My Trips</Text>
        <Ionicons name="add-circle" size={50} color={Colors.PRIMARY} />
      </View>
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
