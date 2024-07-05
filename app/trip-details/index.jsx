import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
    // console.log('trip', JSON.parse(trip));
    setTripDetails(JSON.parse(trip));
  }, []);

  return (
    tripDetails.length !== 0 && (
      <ScrollView>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripDetails.tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
          }}
          style={{
            width: '100%',
            height: 240,
            objectFit: 'cover',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: '100%',
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: 'NotoBold' }}>
            {tripDetails?.tripData?.locationInfo?.name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}
            >
              {moment(tripDetails?.tripData?.travelDates.startDate).format(
                'DD MMM'
              )}
              {' - '}
              {moment(tripDetails?.tripData?.travelDates.endDate).format(
                'DD MMM YYYY'
              )}
            </Text>
            <Text
              style={{ fontFamily: 'Noto', fontSize: 14, color: Colors.GRAY }}
            >
              {tripDetails?.tripData?.traveler.icon}{' '}
              {tripDetails?.tripData?.traveler.title}
            </Text>
          </View>
          {/* Flight Info */}
          {/* <FlightInfo flightData={tripDetails?.tripPlan?.flight} /> */}
          {/* Hotels Info */}
          <HotelList hotelList={tripDetails?.tripPlan?.hotels} />
          {/* Trip Day Planner Info */}
          <PlannedTrip details={tripDetails?.tripPlan?.dailyPlan} />
        </View>
      </ScrollView>
    )
  );
}
