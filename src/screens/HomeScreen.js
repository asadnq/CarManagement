import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import CarSpec from "../components/molecules/CarSpec";
import PrevNextButton from "../components/molecules/PrevNextButton";

const initialState = [
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
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeScreen = () => {
  const [cars, setCars] = React.useState(initialState);
  const [indexCurrentCar, setIndexCurrentCar] = React.useState(0);

  const prev = () => {
    const countCars = cars.length;
    if(indexCurrentCar - 1 < 0){
      setIndexCurrentCar(countCars - 1);
    }else{
      setIndexCurrentCar(indexCurrentCar - 1);
    }
  }

  const next = () => {
    const countCars = cars.length;
    if(indexCurrentCar + 1 >= countCars){
      setIndexCurrentCar(0);
    }else{
      setIndexCurrentCar(indexCurrentCar + 1);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Image
                source={cars[indexCurrentCar].image}
                style={styles.image}
                resizeMode={'contain'}
            />
          </View>

          <CarSpec data={cars[indexCurrentCar]} style={styles.carSpec}/>
          <PrevNextButton titlePrev={cars[indexCurrentCar - 1 < 0 ? cars.length - 1 : indexCurrentCar - 1].name} titleNext={cars[indexCurrentCar + 1 >= cars.length ? 0 : indexCurrentCar + 1].name} onPressPrev={prev} onPressNext={next} />

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: windowHeight,
    paddingTop: 20,
  },
  image: {
    width: windowWidth,
    height: 200,
  },
  carSpec: {
    margin: 20,
  }
});

export default HomeScreen;

