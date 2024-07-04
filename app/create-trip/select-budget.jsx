import { useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, budget: selectedBudget });
  }, [selectedBudget]);

  const onClickContinue = () => {
    if (!selectedBudget) {
      console.log('Please select a budget');
      return;
    }
    router.push('/create-trip/review-trip');
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
        style={{
          fontFamily: 'NotoBold',
          fontSize: 30,
          marginTop: 10,
        }}
      >
        Budget
      </Text>
      <View style={{ marginTop: 5 }}>
        <Text
          style={{ fontFamily: 'NotoBold', fontSize: 16, color: Colors.GRAY }}
        >
          Choose spending budget for your trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedBudget(item)}
              style={{ marginVertical: 5 }}
            >
              <OptionCard option={item} selectedOption={selectedBudget} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={onClickContinue}
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
