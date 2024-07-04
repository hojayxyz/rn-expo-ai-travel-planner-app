import { useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Text style={{ fontFamily: 'NotoBold', fontSize: 30, marginTop: 10 }}>
        Review Trip
      </Text>
      <View style={{ marginTop: 5, height: '70%', display: 'flex' }}>
        <ScrollView>
          <Text
            style={{ fontFamily: 'NotoBold', fontSize: 16, color: Colors.GRAY }}
          >
            Before generating your trip with AI, review your trip details
          </Text>

          {/* Destination Info */}
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 30 }}>📍</Text>
            <View>
              <Text
                style={{
                  fontFamily: 'Noto',
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Destination
              </Text>
              <Text
                style={{
                  fontFamily: 'NotoMedium',
                  fontSize: 20,
                }}
              >
                {tripData?.locationInfo?.name}
              </Text>
            </View>
          </View>

          {/* Travel Date */}
          <View
            style={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 30 }}>🗓️</Text>
            <View>
              <Text
                style={{
                  fontFamily: 'Noto',
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Travel Date
              </Text>
              <Text
                style={{
                  fontFamily: 'NotoMedium',
                  fontSize: 20,
                }}
              >
                {moment(tripData?.travelDates?.startDate).format('DD MMM') +
                  ' - ' +
                  moment(tripData?.travelDates?.endDate).format(
                    'DD MMM, YYYY'
                  ) +
                  ' (' +
                  tripData?.travelDates?.totalTripDays +
                  ' days)'}
              </Text>
            </View>
          </View>

          {/* Traveler Info */}
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 30 }}>🚌</Text>
            <View>
              <Text
                style={{
                  fontFamily: 'Noto',
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Travelers
              </Text>
              <Text
                style={{
                  fontFamily: 'NotoMedium',
                  fontSize: 20,
                }}
              >
                {tripData?.traveler?.title}
              </Text>
            </View>
          </View>

          {/* Budget Info */}
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 30 }}>💲</Text>
            <View>
              <Text
                style={{
                  fontFamily: 'Noto',
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Budget
              </Text>
              <Text
                style={{
                  fontFamily: 'NotoMedium',
                  fontSize: 20,
                }}
              >
                {tripData?.budget?.title}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => router.push('/create-trip/generate-trip')}
        style={{
          position: 'absolute',
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          bottom: 40,
          alignSelf: 'center',
          width: '100%',
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'NotoMedium',
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
