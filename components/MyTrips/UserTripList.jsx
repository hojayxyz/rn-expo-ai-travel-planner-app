import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';

export default function UserTripList({ userTrips }) {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {userTrips[0]?.tripData?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${userTrips[0]?.tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            }}
            style={{
              width: '100%',
              height: 240,
              objectFit: 'cover',
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require('./../../assets/images/placeholder.jpg')}
            style={{
              width: '100%',
              height: 240,
              objectFit: 'cover',
              borderRadius: 15,
            }}
          />
        )}

        <View style={{ marginTop: 5 }}>
          <Text style={{ fontFamily: 'NotoMedium', fontSize: 16 }}>
            {userTrips[0]?.tripData?.locationInfo.name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}
            >
              {moment(userTrips[0]?.tripData?.travelDates.startDate).format(
                'DD MMM'
              )}
              {' - '}
              {moment(userTrips[0]?.tripData?.travelDates.endDate).format(
                'DD MMM YYYY'
              )}
            </Text>
            <Text
              style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}
            >
              {userTrips[0]?.tripData?.traveler.icon}{' '}
              {userTrips[0]?.tripData?.traveler.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'NotoMedium',
                fontSize: 15,
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <UserTripCard key={index} trip={trip} />
        ))}
      </View>
    </View>
  );
}
