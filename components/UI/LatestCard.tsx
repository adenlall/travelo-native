import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

export default function LatestCard({ image, title, tags, price = 0 }: { image: string, title: string, tags: Array<string>, price: any }) {
    const theme = useTheme();

    return (
        <View style={{ borderWidth: 4, borderRadius: theme.roundness * 3.5, borderColor: theme.colors.onPrimary, backgroundColor: theme.colors.primaryContainer, ...styles.container }}>
            <Image style={{ position: 'absolute', borderRadius: theme.roundness * 3.5, width: '100%', height: '100%' }} source={{ uri: image }} />
            <TouchableRipple
                onPress={() => { }}
                rippleColor="rgba(0, 0, 0, .32)"
                style={{ width: '100%', height: '100%', padding: 7, borderRadius: theme.roundness * 3.5, backgroundColor: theme.colors.primaryContainer.replace('1)', '0.6)') }}
            >
                <>
                    <View style={{ flexDirection:'row', gap:5, alignItems: 'flex-start', justifyContent: 'flex-start', alignContent: "flex-start", width: '100%' }}>
                        <Text style={{ ...styles.price, backgroundColor: theme.colors.onPrimary, color: theme.colors.primary }}>
                            {price ? price + " $" : "Free"}
                        </Text>
                        <Text style={{ ...styles.price, backgroundColor: theme.colors.secondaryContainer, color: theme.colors.onSecondaryContainer }}>
                            {"Available Withing 15 Days"}
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', gap: 10 }}>
                        <Text variant='titleLarge' numberOfLines={3} style={{ color: theme.colors.onPrimaryContainer, fontWeight: '700' }}>
                            {title}
                        </Text>
                        <View>
                            <ScrollView style={{}} horizontal={true}>
                                {
                                    tags?.map((item: string, i: number) => (
                                        <Text key={i} style={{ ...styles.price, marginRight: 4, backgroundColor: theme.colors.onPrimaryContainer, color: theme.colors.primaryContainer }}>
                                            {item}
                                        </Text>
                                    ))
                                }

                            </ScrollView>
                        </View>
                    </View>
                </>
            </TouchableRipple>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: 230
    },
    price: {
        borderRadius: 5,
        padding: 1,
        paddingHorizontal: 4
    }
});
