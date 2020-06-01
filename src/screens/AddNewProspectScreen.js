import React, {useState} from 'react';
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
import {carList} from './dummyData';

// TODO: Tailor the prospect data so its easy to implement redux
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
  const mappedCarList = carList.map(car => ({
    value: car,
    label: car.name,
  }));
  
  const [customerName, setCustomerName] = useState('');

  const [birthday, setBirthday] = useState('');
  const [selectedCar, setSelectedCar] = useState(mappedCarList[0]);

  console.log('car options', mappedCarList);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View>
        <Image
          source={selectedCar.value.image}
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
                  setSelectedCar(mappedCarList.find(car => car.value.id === value.id))
                }>
                {mappedCarList.map(option => (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={option.value.id}
                  />
                ))}
              </Picker>
            }
          />
        </View>
        <Button title="Save Prospect" onPress={() => console.log('pressed')} />
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

