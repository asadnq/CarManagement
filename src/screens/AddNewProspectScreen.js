import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  TextInput,
  Text,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { ADD_PROSPECT } from '../constants/prospect';
import { carList } from './dummyData';

const {width, height} = Dimensions.get('window');
const DefaultInput = ({value, label, onChangeText, children, customInput}) => {
  return (
    <View style={[styles.row, styles.flexCenter]}>
      {!children && (
        <>
          {label && (
            <View style={{width: width * 0.2}}>
              <Text style={{textAlign: 'left'}}>{label}</Text>
            </View>
          )}

          <View
            style={{
              width: width * 0.6,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            }}>
            {customInput && customInput}
            {!customInput && (
              <TextInput value={value} onChangeText={v => onChangeText(v)} />
            )}
          </View>
        </>
      )}
      {children && children}
    </View>
  );
};

export const AddNewProspectScreen = () => {
  const dispatch = useDispatch();

  const [customerName, setCustomerName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [selectedCar, setSelectedCar] = useState(carList[0]);

  const mappedCarList = carList.map(car => ({
    value: car,
    label: car.name,
  }));

  const handleSubmit = () => {
    const payload = {
      customerName,
      birthday,
      car: selectedCar,
    };

    dispatch({
      type: ADD_PROSPECT,
      payload
    });
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View>
        <Image
          source={selectedCar.image}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={{padding: 5, flex: 1}}>
        <View style={{marginHorizontal: width * 0.5, paddingVertical: 5}}>
          <DefaultInput
            value={customerName}
            onChangeText={setCustomerName}
            label="Name"
          />
          <DefaultInput
            value={birthday}
            onChangeText={setBirthday}
            label="Date of Birth"
          />
          <DefaultInput
            value={birthday}
            label="Car"
            customInput={
              <Picker
                style={{width: width * 0.7, height: 50}}
                selectedValue={selectedCar.value}
                onValueChange={value =>
                  setSelectedCar(carList.find(car => car.value === value))
                }>
                {mappedCarList.map(option => (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={option.value}
                  />
                ))}
              </Picker>
            }
          />
        </View>
        <Button title="Save Prospect" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width,
    height: 200,
  },
});

/*const carList = [
  {
    name: 'Toyota C-HR',
    edition: 'All New C-HR Single Tone',
    manufacturer: 'Toyota',
    year: 2020,
    engine: '1.8 L 2ZR-FBE I4',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1800 cc',
      seat: 5,
    },
    price: 'IDR 509.05 - 543.79 mio',
    image: require('../assets/images/toyota-chr.jpeg'),
    value: 'Toyota C-HR',
  },
  {
    name: 'Honda Civic',
    edition: 'Honda Civic Sedan 1,5L VTEC Turbo',
    manufacturer: 'Honda',
    year: 2020,
    engine: '2.0 L four-cylinder engine/158 horsepower',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1496 cc',
      seat: 5,
    },
    price: 'IDR 533 mio',
    image: require('../assets/images/honda-civic.jpg'),
    value: 'Honda Civic',
  },
  {
    name: 'Mazda CX-3',
    edition: 'CX-3 Sport',
    manufacturer: 'Mazda',
    year: 2020,
    engine: '2.0 L SkyActiv-G PE-VPS I4',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1998 cc',
      seat: 5,
    },
    price: 'IDR 399.9 mio',
    image: require('../assets/images/mazda-cx3.jpg'),
    value: 'Mazda CX-3',
  },
];*/
