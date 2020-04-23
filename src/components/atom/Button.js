import React from 'react';
import {View, Button} from 'react-native';

export default ({onPress, title='Click Me', color='#4285F4'}) => {
    return(
        <View>
            <Button
                onPress={() => onPress ? onPress() : console.log('Button Pressed')}
                title={title}
                color={color}
            />
        </View>
    )
}
