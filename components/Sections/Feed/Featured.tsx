import { ScrollView, StyleSheet, View } from "react-native";
import OverViewCard from "../../UI/OverViewCard";
import { Text } from "react-native-paper";

export default function Featured() {
  return (
    <>
      <View>
        <Text style={{ paddingHorizontal: 12, paddingVertical:10, paddingTop:19 }} variant='headlineSmall'>Featured This Weekend</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <OverViewCard
            price={0}
            title='ifrane 4 days with local poeple'
            tags={[
              'Ifran', 'Snow', 'Winter'
            ]}
            image='https://images.unsplash.com/photo-1712839398257-8f7ee9127998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <OverViewCard
            price={200}
            title='Globale Toor on Agadir with free local food'
            tags={[
              'Agadir', 'Atlas', 'Local Food'
            ]}
            image='https://images.unsplash.com/photo-1584914584152-9b56c79aec32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <OverViewCard
            price={400}
            title='Tanger One Day Tour with local food'
            tags={[
              'Tanger', 'Local Food', 'One Day'
            ]}
            image='https://images.unsplash.com/photo-1587518394973-2c4afe9d409e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <OverViewCard
            price={900}
            title='ifrane 4 days with localifrane 4 days with local poeple'
            tags={[
              'Ifran', 'Snow', 'Winter'
            ]}
            image='https://images.unsplash.com/photo-1712839398257-8f7ee9127998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </ScrollView>
      </View>
    </>
  )
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
