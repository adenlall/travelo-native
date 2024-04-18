import { useState } from 'react';
import { Appbar, Searchbar, Text } from 'react-native-paper';

export default function AppBar() {
    const [show, setShow] = useState(false);

    return (
        <Appbar.Header>
            {
                show ? (
                    <Searchbar
                        placeholder="Search"
                        onChangeText={() => { }}
                        value={''}
                        icon={'close'}
                        onIconPress={() => { setShow(!show) }}
                    />
                ) : ''
            }
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="Home Page" />
            <Appbar.Action icon="magnify" onPress={() => { setShow(!show) }} />
        </Appbar.Header>

    )
};