import useCardThemes from '@/constants/Cards';
import { ListCardType } from '@/types';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

export default function LatestCard({ image, title, tags, price = 0, theme, horizontal, within }: ListCardType) {

    const md5 = useTheme();
    const cardtheme = useCardThemes(theme);
    const dynamicStyle = horizontal ? styles.horizontal : styles.container;

    return (
        <View style={{ borderWidth: 2, borderRadius: md5.roundness * 3, borderColor: cardtheme.card.border, backgroundColor: cardtheme.card.backgroundColor, ...dynamicStyle }}>
            <Image style={{ position: 'absolute', borderRadius: md5.roundness * 3.3, width: '100%', height: '100%' }} source={{ uri: image }} />
            <TouchableRipple
                onPress={() => { }}
                rippleColor="rgba(0, 0, 0, .32)"
                style={{ width: '100%', height: '100%', padding: 7, borderRadius: md5.roundness * 3.5, backgroundColor: cardtheme.card.backgroundColor.replace('1)', '0.6)') }}
            >
                <>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'flex-start', justifyContent: 'flex-start', alignContent: "flex-start", width: '100%' }}>
                        <Text style={{ ...styles.price, backgroundColor: cardtheme.price.backgroundColor, color: cardtheme.price.color }}>
                            {price ? price + " $" : "Free"}
                        </Text>
                        {
                            within ? (
                                <Text style={{ ...styles.price, backgroundColor: cardtheme.badge.backgroundColor, color: cardtheme.badge.color }}>
                                    {within}
                                </Text>
                            ) : ''
                        }
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', gap: 10 }}>
                        <Text variant='titleLarge' numberOfLines={3} style={{ color: cardtheme.card.color, fontWeight: '700' }}>
                            {title}
                        </Text>
                        <View>
                            <ScrollView style={{}} horizontal={true}>
                                {
                                    tags?.map((item: string, i: number) => (
                                        <Text key={i} style={{ ...styles.price, marginRight: 4, backgroundColor: cardtheme.tags.backgroundColor, color: cardtheme.tags.color }}>
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

    horizontal: {
        margin: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 230,
        height: 230
    },
    price: {
        borderRadius: 5,
        padding: 1,
        paddingHorizontal: 4
    }
});
