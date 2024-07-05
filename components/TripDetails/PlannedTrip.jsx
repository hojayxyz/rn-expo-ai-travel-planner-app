import { View, Text, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import PlaceCard from './PlaceCard';

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
      {details.map((dayDetails, index) => {
        return <PlaceCard key={index} dayDetails={dayDetails} />;
      })}
      {/* <Text>{details[0].activity}</Text> */}
    </View>
  );
}
