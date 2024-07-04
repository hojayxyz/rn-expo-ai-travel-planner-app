import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          paddingVertical: 5,
          paddingHorizontal: 25,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id === option?.id && {
          borderWidth: 3,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontFamily: 'NotoBold' }}>
          {option?.title}
        </Text>
        <Text style={{ fontSize: 14, fontFamily: 'Noto', color: Colors.GRAY }}>
          {option?.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 30 }}>{option?.icon}</Text>
    </View>
  );
}
