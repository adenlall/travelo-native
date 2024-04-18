import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { ScrollViewType } from "@/types";

export default function ScrollAvatars({ children, title, uri, theme }: ScrollViewType) {

  return (
    <>
      <View>
        <View style={{ paddingHorizontal: 12, paddingVertical: 10, paddingTop: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center' }}>
          <Text variant='headlineSmall'>
            {title}
          </Text>
          {
            (uri || uri !== '') ? (
              <Button mode="outlined">
                Discover all
              </Button>
            ) : ''
          }
        </View>
        <ScrollView horizontal={true} style={styles.container}>
          {children}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 10,
    paddingVertical:4,
    paddingHorizontal: 6,
  },
  parent: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // gap: 10,
  }
});
