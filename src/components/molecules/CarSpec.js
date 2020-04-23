import React from 'react';
import {View} from 'react-native';
import DescriptionRow from "../atom/DescriptionRow";

export default ({data, style}) => {
    const [childWidth, setchildWidth] = React.useState({width: 0});
    try{
        const {edition, manufacturer, year, engine, specification, price} = data;
        return (
            <View style={style ? style : {}}>
                <DescriptionRow title={'Name'} description={edition} />
                <DescriptionRow title={'Manufacturer'} description={manufacturer} />
                <DescriptionRow title={'Year'} description={year} />
                <DescriptionRow title={'Engine'} description={engine} />
                <DescriptionRow title={'Specification'} getWidth={(layout) => {setchildWidth( layout)}}>
                    <DescriptionRow title={'Transmission'} description={specification.transmission} width={childWidth.width} fontSize={12} />
                    <DescriptionRow title={'Fuel'} description={specification.fuel} width={childWidth.width} fontSize={12} />
                    <DescriptionRow title={'Engine'} description={specification.engine} width={childWidth.width} fontSize={12} />
                    <DescriptionRow title={'Seat'} description={specification.seat} width={childWidth.width} fontSize={12} />
                </DescriptionRow>
                <DescriptionRow title={'Price'} description={price} />
            </View>
        )
    }
    catch (e) {
        console.log('error', e);
        return null
    }
}
