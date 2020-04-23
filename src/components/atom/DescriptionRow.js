import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default ({width=windowWidth, fontSize=14, title='', description='', children, getWidth}) => {
    const [layout, setLayout] = React.useState({x: 0, y: 0, width, height: 0});
    getWidth ? getWidth(layout) : null;
    return (
        <View style={{...styles.descriptionContainer, width}}>
            <View style={styles.labelContainer}>
                <Text style={{...styles.label, fontSize}}>{title}:</Text>
            </View>
            <View style={styles.descContainer} onLayout={(event) => {
                const {x, y, width, height} = event.nativeEvent.layout;
                setLayout({x, y, width, height});
            }}>
                {
                    children ? children : <Text style={{...styles.desc, fontSize, paddingRight: 10}}>{description}</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    labelContainer: {
        flex: 1,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    descContainer: {
        flex: 2,
    },
    desc: {
        fontSize: 15,
    }
});
