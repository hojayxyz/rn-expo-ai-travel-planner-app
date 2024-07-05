import { View, Text, Image } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function PlannedTrip({ details }) {
  // console.log('details', details[0].activity);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'NotoBold' }}>
        🏕️ Planned Trips
      </Text>
      {/* {Object.entries(details).map(([day, dayDetails]) => {
        <View>
          <Text>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
        </View>;
      })} */}
      {details.map((dayDetails) => {
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
                source={require('./../../assets/images/placeholder.jpg')}
                style={{ width: '100%', height: 120, borderRadius: 15 }}
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
      })}
      {/* <Text>{details[0].activity}</Text> */}
    </View>
  );
}
