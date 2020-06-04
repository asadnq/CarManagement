import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';
import {format} from 'date-fns';
import {carList} from './dummyData';
import {actionTypes} from '../redux/modules/prospect';

// TODO: Tailor the prospect data so its easy to implement redux
const {width, height} = Dimensions.get('window');
const DefaultInput = ({
  value,
  label,
  onChangeText,
  children,
  customInput,
  onPress,
  type,
}) => {
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
            {!customInput && type === 'text' && (
              <TextInput value={value} onChangeText={v => onChangeText(v)} />
            )}
            {type === 'date' && !customInput && (
              <TouchableOpacity onPress={onPress}>
                <TextInput value={format(new Date(value), 'dd/MM/yyyy')} editable={false} />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
      {children && children}
    </View>
  );
};

DefaultInput.defaultProps = {
  type: 'text'
}

export const AddNewProspectScreen = () => {
  const dispatch = useDispatch();

  const mappedCarList = carList.map(car => ({
    value: car,
    label: car.name,
  }));

  const [customerName, setCustomerName] = useState('');
  const [birthday, setBirthday] = useState(new Date(1598051730000));
  const [selectedCar, setSelectedCar] = useState(mappedCarList[0]);

  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleBirthdayChange = (event, selectedDate) => {
    setShowTimePicker(false);
    setBirthday(selectedDate || birthday);
    // setShowTimePicker(Platform.OS === 'ios');
  };

  const resetForm = () => {
    setSelectedCar(mappedCarList[0]);
    setBirthday(new Date());
    setCustomerName('');
  }

  const handleAddProspect = () => {
    const payload = {
      id: String(Math.random()),
      name: customerName,
      birthday,
      car: selectedCar.value,
    };

    dispatch({type: actionTypes.ADD, payload});
    Alert.alert('save success', 'prospect successfuly added', [
      {
        text: 'Ok',
        onPress: resetForm,
      }
    ])
  };

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
            // onChangeText={setBirthday}
            type='date'
            label="Date of Birth"
            onPress={() => setShowTimePicker(true)}
          />
          {showTimePicker && (
            <DateTimePicker
              value={birthday}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={handleBirthdayChange}
            />
          )}
          <DefaultInput
            value={birthday}
            label="Car"
            customInput={
              <Picker
                style={{width: width * 0.7, height: 50}}
                selectedValue={selectedCar.value}
                onValueChange={value =>
                  setSelectedCar(
                    mappedCarList.find(car => car.value.id === value.id),
                  )
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
        <Button title="Save Prospect" onPress={handleAddProspect} />
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
