import { View, Text, Image } from 'react-native';
import { GetPhotoRef } from '../../configs/GooglePlaceApi';
import { useEffect, useState } from 'react';

export default function HotelCard({ item, nearby }) {
  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.hotelName, nearby);
    //console.log(item.hotelName, 'search result : ', result);
    setPhotoRef(result);
  };

  return (
    <View style={{ marginRight: 15, width: 180 }}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        }}
        style={{ width: 180, height: 120, borderRadius: 15 }}
      />
      <View>
        <Text style={{ fontFamily: 'NotoMedium', fontSize: 16 }}>
          {item.hotelName}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontFamily: 'Noto' }}>⭐️ {item.rating}</Text>
          <Text style={{ fontFamily: 'Noto' }}>
            💰 {item.price.split('From ')}
          </Text>
        </View>
      </View>
    </View>
  );
}
