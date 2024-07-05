import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import { router } from 'expo-router';
export default function UserTripCard({ trip }) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/trip-details',
          params: {
            trip: JSON.stringify(trip),
          },
        })
      }
      style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {trip.tripData?.locationInfo?.photoRef ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${trip.tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
          }}
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            borderRadius: 15,
          }}
        />
      ) : (
        <Image
          source={require('./../../assets/images/placeholder.jpg')}
          style={{ width: 100, height: 100, borderRadius: 15 }}
          resizeMode="cover"
        />
      )}

      <View>
        <Text style={{ fontFamily: 'NotoMedium', fontSize: 18 }}>
          {trip.tripData.locationInfo.name}
        </Text>
        <Text style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}>
          {moment(trip.tripData.travelDates.startDate).format('DD MMM')}
          {' - '}
          {moment(trip.tripData.travelDates.endDate).format('DD MMM YYYY')}
        </Text>
        <Text style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}>
          {trip.tripData?.traveler.icon} {trip.tripData.traveler.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
