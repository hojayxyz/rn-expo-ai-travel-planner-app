import { useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const onDateChange = (date, type) => {
    // console.log('date is', date, type);
    if (type === 'START_DATE') {
      setStartDate(moment(date));
    }
    if (type === 'END_DATE') {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      console.log('Please select start and end date');
      return;
    }
    const totalTripDays = endDate.diff(startDate, 'days') + 1;
    console.log('totalTripDays', totalTripDays);
    setTripData({
      ...tripData,
      travelDates: {
        startDate,
        endDate,
        totalTripDays,
      },
    });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Text style={{ fontFamily: 'NotoBold', fontSize: 35, marginTop: 20 }}>
        SelectDates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={7}
          selectedRangeStyle={{ backgroundColor: Colors.PRIMARY }}
          selectedDayTextStyle={{ color: Colors.WHITE }}
        />
      </View>
      <TouchableOpacity
        onPress={() => onDateSelectionContinue()}
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
