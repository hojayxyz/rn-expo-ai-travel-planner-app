import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useContext, useEffect, useState } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { router } from 'expo-router';
import { chatSession } from '../../configs/AiModal';
import { auth, db } from '../../configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import moment from 'moment';

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      '{location}',
      tripData?.locationInfo?.name
    )
      .replace('{totalDays}', tripData?.travelDates?.totalTripDays)
      .replace('{totalNights}', tripData?.travelDates?.totalTripDays - 1)
      .replace('{traveler}', tripData?.traveler?.title)
      .replace('{budget}', tripData?.budget?.title)
      .replace(
        '{startDate}',
        moment(tripData?.travelDates?.startDate).format('DD MMM, YYYY')
      )
      .replace(
        '{endDate}',
        moment(tripData?.travelDates?.endDate).format('DD MMM, YYYY')
      )
      .replace('{totalDays}', tripData?.travelDates?.totalTripDays)
      .replace('{totalNights}', tripData?.travelDates?.totalTripDays - 1);
    console.log('FINAL_PROMPT', FINAL_PROMPT);
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      // console.log(result.response.text());
      const tripResp = JSON.parse(result.response.text());
      const docId = Date.now().toString();
      await setDoc(doc(db, 'UserTrips', docId), {
        userEmail: user.email,
        tripPlan: tripResp, // AI Result Data
        tripData: JSON.parse(JSON.stringify(tripData)), // User Selection Data
        docId,
      });
      setLoading(false);
      router.replace('/(tabs)/mytrip');
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Text
        style={{ fontFamily: 'NotoBold', fontSize: 30, textAlign: 'center' }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: 'NotoMedium',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require('../../assets/images/loading.gif')}
        style={{ width: '100%', height: 250, objectFit: 'contain' }}
      />

      <Text
        style={{
          fontFamily: 'Noto',
          color: 'red',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        Do not Go Back or Refresh the page
      </Text>
      {loading ? (
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <Text>Done</Text>
      )}
    </View>
  );
}
