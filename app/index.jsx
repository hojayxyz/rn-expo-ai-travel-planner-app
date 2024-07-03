import { Text, View } from 'react-native';
import Login from '../components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../configs/FirebaseConfig';
import { useState } from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in', user.uid);
      setUser(user);
    } else {
      console.log('No user');
      setUser(null);
    }
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={'/mytrip'} /> : <Login />}
    </View>
  );
}
