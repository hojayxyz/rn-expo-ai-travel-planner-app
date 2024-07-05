import { View, Text, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useEffect, useState } from 'react';
import { GetPhotoRef } from '../../configs/GooglePlaceApi';

export default function PlaceCard({ dayDetails }) {
  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(dayDetails.location);
    //console.log(item.hotelName, 'search result : ', result);
    setPhotoRef(result);
  };
  return (
    <View
      style={{
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.LIGHT_GRAY,
      }}
    >
      <Text style={{ fontFamily: 'NotoBold', fontSize: 16 }}>
        Day {dayDetails.day} {dayDetails.time} @{dayDetails.location}
      </Text>
      <Text style={{ fontFamily: 'Noto' }}>- {dayDetails.activity}</Text>
      {dayDetails.notes && (
        <Text style={{ fontFamily: 'Noto', color: Colors.GRAY }}>
          - {dayDetails.notes}
        </Text>
      )}
      {dayDetails.ticketPricing && (
        <Text style={{ fontFamily: 'Noto', color: Colors.GRAY }}>
          🎫 Ticket Price: {dayDetails.ticketPricing}
        </Text>
      )}
      {dayDetails.timeToTravel && (
        <Text style={{ fontFamily: 'Noto', color: Colors.GRAY }}>
          ⏱️ Time to travel: {dayDetails.timeToTravel}
        </Text>
      )}
      <View>
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
              photoRef +
              '&key=' +
              process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          style={{ width: '100%', height: 140, borderRadius: 15 }}
        />
        <Text
          style={{
            fontFamily: 'NotoBold',
            position: 'absolute',
            bottom: 5,
            marginLeft: 5,
            color: Colors.WHITE,
          }}
        >
          {dayDetails.location}
        </Text>
      </View>
    </View>
  );
}
