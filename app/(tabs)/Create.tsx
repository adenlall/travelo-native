import RangePicker from '@/components/Sections/RangePicker';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function TabTwoScreen() {
  return (
    <View style={{ padding: 8, gap:7 }}>
      <Text style={{ paddingVertical: 8 }} variant='headlineSmall'>Create Your Offer</Text>
      <TextInput
        mode="outlined"
        label="Offer Title"
        placeholder="A one day Marakesh tour"
      />
      <TextInput
        style={{height:220}}
        mode="outlined"
        label="Description"
        multiline={true}
        placeholder="descrip your offer"
      />
      <TextInput
        mode="outlined"
        label="Location"
        placeholder="where?"
      />
      <RangePicker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
