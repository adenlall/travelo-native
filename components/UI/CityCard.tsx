import useCardThemes from '@/constants/Cards';
import { ListCardType, cardtypes } from '@/types';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

export default function CityCard({ image, name, theme }: { image: string, name: string, theme: cardtypes }) {

    const md5 = useTheme();
    const cardtheme = useCardThemes(theme);

    return (
        <View style={{ alignContent: 'flex-start', margin: 4 }}>
            <View style={{ borderWidth: 2, borderRadius: md5.roundness * 3.5, borderColor: cardtheme.card.border, ...styles.container }}>
                <Image style={{ position: 'absolute', borderRadius: md5.roundness * 3.2, width: '100%', height: '100%' }} source={{ uri: image }} />
                <TouchableRipple
                    onPress={() => { }}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={{ width: '100%', height: '100%', padding: 7, borderRadius: md5.roundness * 3.5, backgroundColor: cardtheme.card.backgroundColor.replace('1)', '0.4)') }}
                >
                    <>
                        <View style={{ flex: 1 }}></View>
                        <Text style={{ paddingLeft: 2, color: cardtheme.card.color }} variant='bodyMedium'>
                            {name}
                        </Text>
                    </>
                </TouchableRipple>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 120,
        height: 90
    },
});
