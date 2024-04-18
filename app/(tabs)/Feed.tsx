import Featured from '@/components/Sections/Feed/Featured';
import AppBar from '@/components/Sections/Feed/AppBar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Latest from '@/components/Sections/Feed/Latest';

export default function TabOneScreen() {
  return (
    <>
    <ScrollView style={styles.parent}>
      <Featured />
      <Latest />
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 4,
    paddingHorizontal: 4,
  },
  parent: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // gap: 10,
  }
});
