import { ScrollView, StyleSheet, View } from "react-native";
import LatestCard from "../../UI/LatestCard";
import { Button, Text } from "react-native-paper";
import { ListViewType, cardtypes } from "@/types";

export default function ListView({ title, data, uri, theme, horizontal = false }: ListViewType) {

  const cardsList = data?.map((item: any, i: number) => (
    <LatestCard
      within={item.within}
      horizontal={horizontal??false}
      theme={theme}
      image={item?.img}
      price={item?.price}
      title={item?.title}
      tags={item?.tags}
      key={i}
    />
  ))


  return (
    <>
      <View>
        <View style={{ paddingHorizontal: 12, paddingVertical: 10, paddingTop: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center' }}>
          <Text variant='headlineSmall'>
            {title}
          </Text>
          {
            (uri||uri!=='')?(
              <Button mode="outlined">
                Discover all
              </Button>
            ):''
          }
        </View>
        {
          horizontal ? (
            <ScrollView horizontal={true} style={styles.container}>
              {cardsList}
            </ScrollView>
          ) : (
            <View style={styles.container}>
              {cardsList}
            </View>
          )
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 4,
    paddingHorizontal: 6,
  },
  parent: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // gap: 10,
  }
});
