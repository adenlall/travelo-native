import useCardThemes from '@/constants/Cards';
import { AvatarType } from '@/types';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

export default function Avatar({ image, theme, name, avatar }: AvatarType) {

    const md5 = useTheme();
    const cardtheme = useCardThemes(theme);
    const dynamicStyle = avatar ? styles.container : styles.city;

    return (
        <View style={{ ...dynamicStyle, gap:2, justifyContent:'flex-start', alignContent:'center', alignItems:'center' }}>
            <View style={{borderWidth:4, borderColor:cardtheme.card.backgroundColor,...styles.avatar}}>
                <Image style={{borderRadius:100, width:'100%', height:'100%'}} source={{ uri: image }} />
            </View>
            <Text style={{alignSelf:'center', textAlign:'center', maxWidth:styles.avatar.width}} numberOfLines={2} variant='bodyLarge'>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 100,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    city: {}
});
