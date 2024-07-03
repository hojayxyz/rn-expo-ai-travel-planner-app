import { useNavigation } from 'expo-router';
import { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, []);

  useEffect(() => {
    console.log('tripData', tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setTripData({
            locationInfo: {
              name: data?.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0].photo_reference,
              url: details?.url,
            },
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 50,
          },
        }}
      />
      <View>
        <Text>Result</Text>
        <Text>{tripData?.locationInfo?.name}</Text>
        <Text>{tripData?.locationInfo?.coordinates?.lat}</Text>
        <Text>{tripData?.locationInfo?.coordinates?.lng}</Text>
      </View>
    </View>
  );
}
