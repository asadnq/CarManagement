import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from "../atom/Button";

export default ({onPressPrev, onPressNext, titlePrev='Prev', titleNext='Next'}) => {
    return (
        <View style={styles.container}>
            <Button title={titlePrev} onPress={onPressPrev} />
            <Button title={titleNext} onPress={onPressNext} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
        marginTop: 30,
    },
})
