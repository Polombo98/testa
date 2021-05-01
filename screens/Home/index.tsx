import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { green } from '../../colors';
import Header from '../../components/Header';
import LoaderWrapper from '../../components/LoaderWrapper';
import Tab from '../../components/Tab';
import { RootStackParamList } from '../../App';

interface IShop {
  distance: string,
  id: string,
  name: string,
  numberOfOffers: number,
}

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen: FC<Props> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<IShop[]>([]);
  const [err, setErr] = useState('');
  useEffect(() => {
    (async () => {
      try{
        const response = await fetch('http://dev01.thrownomore.no:5001/get_shops')
        setIsLoading(false);
        const listResponse = await response.json();
        setList(listResponse.result);
      } catch (err) {
        setErr(err);
      }
    })()
  }, [])
  const navigateToDetail = (id: number, label: string) => navigation.push('Detail', {id, label});
  return(
    <SafeAreaView style={styles.mainWrapper}>
      <Header label="Shops">
        <Tab label="All" active/>
        <Tab label="My favourites" />
      </Header>
      {
        isLoading &&
        <LoaderWrapper />
      }
      {
        !err &&
        <View style={styles.listWrapper}>
          {
            list.map(({distance, id, name, numberOfOffers}, idx) => {
              const onTilePress = () => navigateToDetail(idx, name);
              return(
                <TouchableOpacity key={id} style={styles.listItemWrapper} onPress={onTilePress}>
                  <View style={styles.listItemTextWrapper}>
                    <Text style={styles.nameOfShop}>{name}</Text>
                    <Text style={styles.distanceToShop}>{distance}</Text>
                  </View>
                  <View style={styles.chipWrapper}>
                    <Text style={styles.chipText}>
                      {numberOfOffers}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listWrapper: {
    paddingHorizontal: 16,
    marginTop: 20
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: '#999',
    borderBottomWidth: 1,
    paddingVertical: 16
  },
  listItemTextWrapper: {
    marginLeft: '20%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  nameOfShop: {
    fontSize: 18,
    marginRight: 10
  },
  distanceToShop: {
    fontSize: 12,
    marginTop: 6
  },
  chipWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: green,
    borderRadius: 500
  },
  chipText: {
    color: '#fff'
  }
})

export default HomeScreen;
