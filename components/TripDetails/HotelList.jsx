import { View, Text, FlatList, Image } from 'react-native';
import HotelCard from './HotelCard';

export default function HotelList({ hotelList, nearby }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: 'NotoBold', fontSize: 20 }}>
        🏨 Hotel Recommendation
      </Text>
      <FlatList
        data={hotelList}
        style={{ marginTop: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HotelCard item={item} nearby={nearby} index={index} />
        )}
      />
    </View>
  );
}
