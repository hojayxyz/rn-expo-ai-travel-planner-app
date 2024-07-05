import { View, Text, FlatList, Image } from 'react-native';
export default function HotelList({ hotelList }) {
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
          <View style={{ marginRight: 15, width: 180 }}>
            <Image
              source={require('./../../assets/images/placeholder.jpg')}
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
        )}
      />
    </View>
  );
}
