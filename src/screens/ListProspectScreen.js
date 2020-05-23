import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from 'react-native';

import {myProspects, dummyProspects} from './dummyData';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const ProspectCard = ({prospect}) => {
  return (
    <View>
      <View style={[styles.card, styles.row]}>
        <View style={{width: '30%'}}>
          <Text style={styles.prospetName}>{prospect.name}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: prospect.car.badgeColor,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 8,
              borderColor: '#333',
              borderWidth: 1
            }}>
            <Text style={[{color: prospect.car.textColor}]}>
              {prospect.car.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const ListProspectScreen = () => {
  const [prospects, setProspects] = useState(dummyProspects);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{paddingHorizontal: 10}}>
        {prospects.map(prospect => {
          return <ProspectCard prospect={prospect} key={prospect.id} />;
        })}
      </ScrollView>
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
  card: {
    justifyContent: 'space-between',
    marginVertical: 7.5,
    borderWidth: 1,
    borderColor: '#3d3d3d',
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.025,
    borderRadius: 5,
  },
  prospetName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
