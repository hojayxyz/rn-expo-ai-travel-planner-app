import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';
import { useRouter } from 'expo-router';

export default function MyTrip() {
  const user = auth.currentUser;
  const router = useRouter();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetUserTrips();
  }, [user]);

  const GetUserTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    try {
      const q = query(
        collection(db, 'UserTrips'),
        where('userEmail', '==', user?.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        setUserTrips((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  };

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontFamily: 'NotoBold', fontSize: 30 }}>My Trips</Text>
        <TouchableOpacity
          onPress={() => router.push('/create-trip/search-place')}
        >
          <Ionicons name="add-circle" size={50} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color={Colors.PRIMARY} />}
      {userTrips.length === 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}
