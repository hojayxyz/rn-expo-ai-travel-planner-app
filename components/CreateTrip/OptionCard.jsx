import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
export default function OptionCard({ option, selectedTraveler }) {
  return (
    <View
      style={[
        {
          padding: 25,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedTraveler?.id === option?.id && {
          borderWidth: 3,
        },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: 'NotoBold' }}>
          {option?.title}
        </Text>
        <Text style={{ fontSize: 17, fontFamily: 'Noto', color: Colors.GRAY }}>
          {option?.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 35 }}>{option?.icon}</Text>
    </View>
  );
}
